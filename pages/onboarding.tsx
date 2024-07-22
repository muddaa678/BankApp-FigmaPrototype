import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Onboarding: NextPage = () => {
  const router = useRouter();

  const onContentContainerClick = useCallback(() => {
    router.push("/log-in-sign-up");
  }, [router]);

  return (
    <div className="w-full relative rounded-21xl bg-gray-200 h-[57.875rem] overflow-hidden text-center text-[1.063rem] text-label-color-dark-primary font-body-regular-16">
      <section
        className="absolute top-[9.188rem] left-[-4rem] w-[34.706rem] h-[26.488rem]"
        id="CardImage"
      >
        <img
          className="absolute top-[0rem] left-[0.9rem] w-[31.163rem] h-[26.488rem] object-cover"
          alt=""
          src="/CardGradient@2x.png"
        />
        <div className="absolute top-[2.625rem] left-[0rem] w-[34.706rem] h-[22.519rem]">
          <img
            className="absolute top-[1.156rem] left-[0rem] rounded-xl w-[30.775rem] h-[21.369rem] object-contain"
            alt=""
            src="/CardImage2@2x.png"
          />
          <img
            className="absolute top-[0rem] left-[3.931rem] rounded-xl w-[30.775rem] h-[21.369rem] object-contain"
            alt=""
            src="/CardImage3@2x.png"
          />
        </div>
      </section>
      <section
        className="absolute top-[39.844rem] left-[1.25rem] w-[24.25rem] flex flex-col items-start justify-start gap-[1.5rem] text-center text-[1.75rem] text-label-color-dark-primary font-body-regular-16"
        id="WelcomeSection"
      >
        <div className="self-stretch flex flex-col items-center justify-start gap-[1rem]">
          <h1
            className="m-0 self-stretch relative text-inherit font-semibold font-inherit"
            id="WelcomeHeading"
          >
            <p className="m-0">Welcome to</p>
            <p className="m-0">AI Analysis</p>
          </h1>
          <div className="w-[19.313rem] relative text-[0.875rem] text-neutral-light-grey-2 inline-block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor `}</div>
        </div>
        <div
          className="self-stretch flex flex-col items-center justify-start cursor-pointer"
          onClick={onContentContainerClick}
        >
          <button
            className="cursor-pointer [border:none] py-[0.25rem] px-[1.25rem] bg-[transparent] w-[24.25rem] rounded-xl [background:linear-gradient(90deg,_#11998e,_#38ef7d)] h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border"
            autoFocus={true}
            id="GetStartedBtn"
          >
            <div className="relative text-[1rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-center">
              Get Started
            </div>
          </button>
        </div>
      </section>
      <div className="absolute top-[0rem] left-[calc(50%_-_196px)] w-[24.563rem] h-[3.313rem] flex flex-row items-end justify-center">
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
  );
};

export default Onboarding;
