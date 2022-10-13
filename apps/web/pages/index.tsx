import Button from "../components/common/Button";
import Card from "../components/nft/Card";
import { ForwardIcon, BackwardIcon } from "@heroicons/react/20/solid";

export default function Web() {
  return (
    <div
      className="
    flex justify-center items-center
    min-h-screen w-full
    "
    >
      <div
        className="
      flex flex-col justify-around items-center
      w-2/3 h-[66vh] max-w-lg gap-16"
      >
        <Card />
        <div
          className="
        inline-flex 
        justify-around
        w-full
        "
        >
          <Button
            text={"Previous"}
            iconLeft={
              <BackwardIcon className="-ml-1 mr-3 h-6 w-6" aria-hidden="true" />
            }
          />
          <Button
            text={"Next"}
            iconRight={
              <ForwardIcon className="ml-3 -mr-1 h-6 w-6" aria-hidden="true" />
            }
          />
        </div>
      </div>
    </div>
  );
}
