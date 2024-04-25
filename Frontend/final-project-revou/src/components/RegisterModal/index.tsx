type SetToggleMenuType = (
  value: boolean | ((prev: boolean) => boolean)
) => void;

interface Props {
  setShowRegisterModal: SetToggleMenuType;
}

export default function RegisterModal({ setShowRegisterModal }: Props) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setShowRegisterModal(false)}
        ></div>

        <div className="fixed flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl z-50">
          <div className="px-0 sm:p-6">
            <h1>REGISTER</h1>
          </div>
        </div>
      </div>
    </>
  );
}
