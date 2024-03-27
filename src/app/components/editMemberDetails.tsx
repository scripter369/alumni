import Image from "next/image";
import Modal from "react-responsive-modal";
import { toast } from "react-toastify";
import { member } from "../membersType";
import { Input } from "@/components/ui/input";

interface Props {
  isEditMember: boolean;
  setIsEditMember: (isEditMember: boolean) => void;
  memberData: member;
}

const EditMemberDetails: React.FC<Props> = ({
  isEditMember,
  setIsEditMember,
  memberData,
}) => {
  const editDetails = () => {
    try {
      toast.success(memberData.displayName + " Updated");
      setIsEditMember(false);
    } catch (error) {
      toast.error("Something went Wrong");
    }
  };
  return (
    <>
      <Modal
        open={isEditMember}
        onClose={() => setIsEditMember(false)}
        center
        classNames={{
          modal: "rounded-xl tempModal",
        }}>
        <div className="space-y-8">
          <div className="select-none space-y-12">
            <p className="underline underline-offset-4 text-xl lg:text-2xl font-semibold text-center">
              Edit Member - {memberData?.RegNo}
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
                  <Input
                    type="text"
                    placeholder={`${memberData?.DOB.toString()}`}
                    className="w-fit text-xl lg:text-2xl font-semibold break-words flex-wrap"
                  />
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Service No : </span>
                  <Input
                    type="number"
                    placeholder={`${memberData?.serviceNo}`}
                    className="w-fit text-xl lg:text-2xl font-semibold break-words flex-wrap"
                  />
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Service Field : </span>
                  <Input
                    type="text"
                    placeholder={`${memberData?.serviceField}`}
                    className="w-fit text-xl lg:text-2xl font-semibold break-words flex-wrap"
                  />
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Currently Employed :</span>
                  &nbsp;
                  <Input
                    type="text"
                    placeholder={`${
                      memberData?.currentEMP ? memberData?.currentEMP : "N/A"
                    }`}
                    className="w-fit text-xl lg:text-2xl font-semibold break-words flex-wrap"
                  />
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

            <div className="flex justify-evenly items-center w-full">
              <div className="space-y-4">
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Aadhar No : </span>
                  <Input
                    type="number"
                    maxLength={12}
                    placeholder={`${memberData?.aadharNo}`}
                    className="w-fit text-xl lg:text-2xl font-semibold break-words flex-wrap"
                  />
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Pan No : </span>
                  <Input
                    type="text"
                    placeholder={`${
                      memberData?.panNo ? memberData?.panNo : "N/A"
                    }`}
                    className="w-fit text-xl lg:text-2xl font-semibold break-words flex-wrap"
                  />
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Email : </span>
                  {memberData?.email}
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Mobile No : </span>
                  <Input
                    type="tel"
                    maxLength={10}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    placeholder={`${memberData?.phoneNo}`}
                    className="w-fit text-xl lg:text-2xl font-semibold break-words flex-wrap"
                  />
                </p>
                <p className="text-xl lg:text-2xl font-semibold break-words flex-wrap w-96">
                  <span className="text-[#000]"> Address : </span>
                  <Input
                    type="text"
                    placeholder={`${memberData?.address}`}
                    className="w-fit text-xl lg:text-2xl font-semibold break-words flex-wrap"
                  />
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
          </div>

          <button
            onClick={() => editDetails()}
            className="bg-green-700 p-3 rounded-xl text-white outline-0 mx-auto flex justify-center items-center">
            Save Changes
          </button>
        </div>
      </Modal>
    </>
  );
};

export default EditMemberDetails;
