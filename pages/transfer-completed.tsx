import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const TransferCompleted: NextPage = () => {
  const router = useRouter();

  const onLogInClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onDoYouWantClick = useCallback(() => {
    router.push("/top-up");
  }, [router]);

  return (
    <div className="w-full relative rounded-21xl bg-primary-black h-[57.875rem] overflow-hidden text-center text-[1.063rem] text-label-color-dark-primary font-body-regular-16">
      <div className="absolute top-[0rem] left-[calc(50%_-_194px)] w-[24.563rem] h-[3.313rem] flex flex-row items-end justify-center">
        <div className="self-stretch flex-1 flex flex-col items-center justify-center">
          <div className="w-[3.375rem] relative rounded-3xl h-[1.313rem]">
            <div className="absolute top-[0.063rem] left-[0rem] tracking-[-0.41px] leading-[1.375rem] font-semibold inline-block w-[3.375rem] h-[1.25rem]">
              9:41
            </div>
          </div>
        </div>
        <div className="self-stretch w-[7.813rem] flex flex-col items-center justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
          <div className="w-[7.813rem] relative rounded-81xl bg-system-background-dark-base-primary h-[2.313rem] hidden">
            <div className="absolute top-[calc(50%_-_18.5px)] left-[calc(50%_-_62.5px)] rounded-81xl bg-system-background-dark-base-primary w-[5rem] h-[2.313rem] overflow-hidden" />
            <div className="absolute top-[calc(50%_-_18.5px)] left-[calc(50%_+_25.5px)] rounded-81xl bg-system-background-dark-base-primary w-[2.313rem] h-[2.313rem] overflow-hidden" />
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-center justify-center">
          <div className="flex flex-row items-start justify-start gap-[0.5rem]">
            <img
              className="w-[1.125rem] relative h-[0.75rem]"
              alt=""
              src="/icon--mobile-signal1.svg"
            />
            <img
              className="w-[1.063rem] relative h-[0.738rem]"
              alt=""
              src="/wifi1.svg"
            />
            <img
              className="w-[1.713rem] relative h-[0.813rem]"
              alt=""
              src="/-statusbarbattery1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_305px)] left-[2.25rem] h-[4.125rem] hidden flex-row items-center justify-center py-[0rem] pr-[0.625rem] pl-[0rem] box-border">
        <div className="flex flex-row items-center justify-center py-[0.625rem] px-[0rem]">
          <div className="w-[1rem] rounded-81xl h-[1rem] flex flex-row items-center justify-center p-[0.125rem] box-border">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
              alt=""
              src="/wrapper.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_305px)] left-[15.188rem] h-[4.125rem] hidden flex-row items-center justify-center py-[0rem] px-[1rem] box-border">
        <div className="flex flex-row items-center justify-center p-[0.625rem]">
          <div className="rounded-81xl flex flex-row items-center justify-center p-[0.125rem]">
            <img
              className="w-[1.25rem] relative h-[1.25rem]"
              alt=""
              src="/wrapper1.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[14.125rem] left-[1.25rem] w-[23.438rem] hidden flex-col items-start justify-start py-[0.312rem] pr-[0rem] pl-[4rem] box-border">
        <div className="self-stretch relative bg-gray-8 h-[0.063rem]" />
      </div>
      <div className="absolute top-[3.813rem] left-[calc(50%_-_101px)] text-[1.25rem] font-medium">
        Transfer Completed
      </div>
      <section
        className="absolute top-[10.938rem] left-[calc(50%_-_187px)] w-[23.438rem] h-[28.438rem] text-center text-[1.125rem] text-label-color-dark-primary font-heading-h1"
        id="TransferSuccessSection"
      >
        <img
          className="absolute top-[-0.019rem] left-[3.531rem] w-[16.381rem] h-[13.469rem]"
          alt=""
          src="/elements.svg"
        />
        <div className="absolute top-[15.5rem] left-[2.463rem] flex flex-col items-center justify-start gap-[1.5rem]">
          <div className="flex flex-col items-center justify-start gap-[1rem]">
            <div className="relative leading-[140%] font-medium">
              Transfer Successful
            </div>
            <div className="relative text-[2.25rem] leading-[130%] font-body-regular-16 text-springgreen">
              $24,734.00
            </div>
          </div>
          <div className="w-[18.519rem] relative text-[0.875rem] leading-[150%] font-body-regular-16 inline-block text-tb">
            <span>{`The transfer, `}</span>
            <span className="text-label-color-dark-primary">
              Sunday 12 April 2022
            </span>
            <span>{` to `}</span>
            <span className="text-label-color-dark-primary">
              Rochman Kamarudin
            </span>
            <span> has been successful</span>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[27.125rem] left-[7.406rem] flex flex-row items-center justify-start gap-[0.5rem]"
          id="DownloadTransferBtn"
        >
          <img
            className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
            alt=""
            src="/download.svg"
          />
          <div className="relative text-[0.875rem] leading-[150%] font-body-regular-16 text-label-color-dark-primary text-center">
            Download Struk
          </div>
        </button>
      </section>
      <div className="absolute top-[44.625rem] left-[1.25rem] w-[24.25rem] flex flex-col items-center justify-start gap-[1.5rem]">
        <button
          className="cursor-pointer [border:none] py-[0.25rem] px-[1.25rem] bg-[transparent] self-stretch rounded-xl [background:linear-gradient(90deg,_#11998e,_#38ef7d)] h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border"
          id="BackHomeBtn"
          onClick={onLogInClick}
        >
          <div className="relative text-[1rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-center">
            Back Home
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.875rem] leading-[150%] font-body-regular-16 text-springgreen text-left inline-block"
          id="AnotherTransferBtn"
          onClick={onDoYouWantClick}
        >
          Do you want to make another transfer?
        </button>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[3.875rem] left-[1.25rem] w-[1.75rem] h-[1.75rem] overflow-hidden"
        id="BackBtn"
        onClick={onLogInClick}
      >
        <img
          className="absolute h-[68.93%] w-[37.5%] top-[15.71%] right-[34.29%] bottom-[15.36%] left-[28.21%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
      </button>
    </div>
  );
};

export default TransferCompleted;
