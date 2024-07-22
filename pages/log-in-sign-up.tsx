import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const LogInSignUp: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/log-in");
  }, [router]);

  const onSignUpClick = useCallback(() => {
    router.push("/sign-up");
  }, [router]);

  return (
    <div className="w-full relative rounded-21xl bg-primary-black h-[57.875rem] overflow-hidden text-center text-[1.063rem] text-label-color-dark-primary font-body-regular-16">
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
      <section
        className="absolute top-[21.688rem] left-[1.5rem] w-[23.75rem] flex flex-col items-start justify-start gap-[2.5rem] text-left text-[1rem] text-neutral-light-grey-2 font-body-regular-16"
        id="GetStartedSection"
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
          <button
            className="cursor-pointer [border:none] py-[0.5rem] px-[0.937rem] bg-[transparent] self-stretch rounded-xl [background:linear-gradient(90deg,_#11998e,_#38ef7d)] h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border"
            id="LoginBtn"
            onClick={onButtonClick}
          >
            <div className="relative text-[1rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-left">
              Log In
            </div>
          </button>
          <button
            className="cursor-pointer py-[0.25rem] px-[1.25rem] bg-[transparent] self-stretch rounded-xl box-border h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-primary-main-color"
            id="SignupBtn"
            onClick={onSignUpClick}
          >
            <div className="relative text-[1rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-center">
              Sign Up
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
          <div className="flex-1 relative bg-gainsboro h-[0.063rem]" />
          <div className="relative">Or</div>
          <div className="flex-1 relative bg-gainsboro h-[0.063rem]" />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.25rem]">
          <button
            className="cursor-pointer [border:none] py-[0.25rem] px-[1.25rem] bg-gray-500 self-stretch rounded-xl h-[3rem] flex flex-row items-center justify-center box-border gap-[0.5rem]"
            id="GoogleBtn"
          >
            <img
              className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/GoogleIcon@2x.png"
            />
            <div className="relative text-[1rem] font-medium font-body-regular-16 text-label-color-dark-primary text-center">
              Continue with Google
            </div>
          </button>
          <button
            className="cursor-pointer [border:none] py-[0.25rem] px-[1.25rem] bg-gray-500 self-stretch rounded-xl h-[3rem] flex flex-row items-center justify-center box-border gap-[0.5rem]"
            id="FacebookBtn"
          >
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group.svg"
              />
            </button>
            <div className="relative text-[1rem] font-medium font-body-regular-16 text-label-color-dark-primary text-center">
              Continue with Facebook
            </div>
          </button>
        </div>
      </section>
      <div className="absolute top-[calc(50%_-_260px)] left-[calc(50%_-_151.5px)] flex flex-row items-center justify-center gap-[1.45rem] text-left text-[2.5rem]">
        <div className="flex flex-row items-start justify-center relative gap-[0.725rem]">
          <img
            className="w-[3.625rem] relative h-[3.625rem] object-cover z-[0]"
            alt=""
            src="/Logo1@2x.png"
          />
          <img
            className="w-6/12 absolute !m-[0] h-3/6 top-[0%] right-[50%] bottom-[50%] left-[0%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
            alt=""
            src="/Logo2@2x.png"
          />
        </div>
        <h1
          className="m-0 relative text-inherit leading-[2.9rem] font-semibold font-inherit"
          id="LogoMark"
        >
          AI Analysis
        </h1>
      </div>
    </div>
  );
};

export default LogInSignUp;
