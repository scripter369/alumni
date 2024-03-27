import Image from "next/image";
import Modal from "react-responsive-modal";
import { member } from "../membersType";
import { useEffect, useState } from "react";
import EditMemberDetails from "./editMemberDetails";

interface Props {
  isMember: boolean;
  setIsMember: (isMember: boolean) => void;
  memberData: member;
  isAdmin: boolean;
}

const MemberDetails: React.FC<Props> = ({
  isMember,
  setIsMember,
  memberData,
  isAdmin,
}) => {
  const [isEditMember, setIsEditMember] = useState(false);

  // Getting Members Data
  useEffect(() => {}, []);

  return (
    <>
      <Modal
        open={isMember}
        onClose={() => setIsMember(false)}
        center
        classNames={{
          modal: "rounded-xl tempModal",
        }}>
        <div className="space-y-8">
          <div className="select-none space-y-12">
            <p className="underline underline-offset-4 text-xl lg:text-2xl font-semibold text-center">
              {isAdmin ? `Registration No : ${memberData?.RegNo}` : "Member"}
            </p>

            <div className="flex justify-evenly items-center w-full">
              <div className="space-y-4">
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Name : </span>Mr.&nbsp;
                  {memberData?.displayName}
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Father Name : </span>Shri&nbsp;
                  {memberData?.fatherName}
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> D.O.B. : </span>
                  {memberData?.DOB.toString()}
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Service No : </span>
                  {memberData?.serviceNo}
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Service Field : </span>
                  {memberData?.serviceField}
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Currently Employed :</span>
                  &nbsp;
                  {memberData?.currentEMP ? memberData?.currentEMP : "N/A"}
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> D/O Joining. : </span>
                  {memberData?.DOJ?.toString()
                    ? memberData?.DOJ?.toString()
                    : "N/A"}
                </p>
              </div>

              {memberData && (
                <div>
                  <Image
                    src={memberData.photoURL}
                    alt="user-avatar"
                    width={250}
                    height={250}
                    className="rounded-xl object-cover mx-auto hover:scale-105 transition-all ease-in-out duration-300"
                  />
                </div>
              )}
            </div>
            {isAdmin && (
              <div className="flex justify-evenly items-center w-full">
                <div className="space-y-4">
                  <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                    <span className="text-[#000]"> Aadhar No : </span>
                    {memberData?.aadharNo}
                  </p>
                  <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                    <span className="text-[#000]"> Pan No : </span>
                    {memberData?.panNo ? memberData?.panNo : "N/A"}
                  </p>
                  <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                    <span className="text-[#000]"> Email : </span>
                    {memberData?.email}
                  </p>
                  <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                    <span className="text-[#000]"> Mobile No : </span>
                    {memberData?.phoneNo}
                  </p>
                  <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                    <span className="text-[#000]"> Address : </span>
                    {memberData?.address}
                  </p>
                </div>

                {memberData && (
                  <div className="flex flex-col space-y-6 justify-between items-center">
                    <div>
                      <Image
                        src={memberData.aadharUrl1}
                        alt="aadhar-front"
                        width={200}
                        height={200}
                        className="rounded-xl object-cover mx-auto hover:scale-105 transition-all ease-in-out duration-300"
                      />
                    </div>
                    <div>
                      <Image
                        src={memberData.aadharUrl2}
                        alt="aadhar-back"
                        width={200}
                        height={200}
                        className="rounded-xl object-cover mx-auto hover:scale-105 transition-all ease-in-out duration-300"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {isAdmin && (
            <button
              onClick={() => setIsEditMember(true)}
              className="bg-green-700 p-3 rounded-xl text-white outline-0 mx-auto flex justify-center items-center">
              Edit Details
            </button>
          )}
        </div>
      </Modal>

      {memberData && (
        <EditMemberDetails {...{ isEditMember, setIsEditMember, memberData }} />
      )}
    </>
  );
};

export default MemberDetails;
