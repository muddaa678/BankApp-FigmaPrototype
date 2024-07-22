import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const SplashScreen: NextPage = () => {
  const router = useRouter();

  const onLogoContainerClick = useCallback(() => {
    router.push("/onboarding");
  }, [router]);

  return (
    <div className="w-full relative rounded-21xl bg-primary-black h-[57.875rem] overflow-hidden flex flex-col items-center justify-start py-[0rem] pr-[1.062rem] pl-[1.125rem] box-border gap-[23.812rem] text-center text-[1.063rem] text-system-background-dark-base-primary font-body-regular-16">
      <div className="w-[24.563rem] h-[3.313rem] overflow-hidden shrink-0 flex flex-col items-center justify-start">
        <div className="w-[24.563rem] h-[3.313rem] flex flex-row items-end justify-center">
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
                src="/icon--mobile-signal.svg"
              />
              <img
                className="w-[1.063rem] relative h-[0.738rem]"
                alt=""
                src="/wifi.svg"
              />
              <img
                className="w-[1.713rem] relative h-[0.813rem]"
                alt=""
                src="/-statusbarbattery.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[24.563rem] h-[3.313rem] flex flex-row items-end justify-center mt-[-3.313rem] text-label-color-dark-primary">
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
      </div>
      <div
        className="flex flex-row items-center justify-center gap-[1.45rem] cursor-pointer text-left text-[2.5rem] text-label-color-dark-primary"
        onClick={onLogoContainerClick}
      >
        <div className="flex flex-row items-start justify-center relative gap-[0.725rem]">
          <img
            className="w-[3.625rem] relative h-[3.625rem] z-[0]"
            alt=""
            src="/vector.svg"
          />
          <img
            className="w-6/12 absolute !m-[0] h-3/6 top-[0%] right-[50%] bottom-[50%] left-[0%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/vector1.svg"
          />
        </div>
        <div className="relative leading-[2.9rem] font-semibold">
          AI Analysis
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
