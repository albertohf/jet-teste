import { BrowserView, MobileView } from "react-device-detect";
import { FcOk, FcCancel } from "react-icons/fc";

export default function Available({ status }: { status: boolean }) {
  return (
    <div>
      {status ? (
        <>
          <BrowserView>
            <button className="bg-green-100 hover:bg-green-300 text-green-800 py-1 px-2 rounded text-xs font-medium">
              Available
            </button>
          </BrowserView>
          <MobileView>
            <button className="absolute">
              <FcOk size={24} />
            </button>
          </MobileView>
        </>
      ) : (
        <>
          <BrowserView>
            <button className="bg-red-100 hover:bg-red-300 text-red-800 py-1 px-2 rounded text-xs font-medium">
              Unavailable
            </button>
          </BrowserView>
          <MobileView>
            <FcCancel size={24} />
          </MobileView>
        </>
      )}
    </div>
  );
}
