import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const VerifyOTP: NextPage = () => {
  const router = useRouter();

  const onLogInClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onFrameClick = useCallback(() => {
    router.push("/log-in-sign-up");
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
      <div className="absolute top-[3.813rem] left-[calc(50%_-_61px)] text-[1.5rem] font-medium">
        Verify OTP
      </div>
      <div className="absolute top-[10.813rem] left-[1.5rem] text-[0.875rem] text-left inline-block w-[23.75rem]">
        Enter your OTP which has been sent to your email and completely verify
        your account.
      </div>
      <section
        className="absolute top-[15.438rem] left-[1.5rem] w-[23.75rem] flex flex-col items-start justify-start gap-[2.5rem] text-center text-[0.875rem] text-neutral-light-grey-2 font-body-regular-16"
        id="OTPSection"
      >
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-center justify-start gap-[1.75rem]">
            <div className="self-stretch flex flex-row items-center justify-between">
              <input
                className="[border:none] [outline:none] bg-[transparent] w-[3.625rem] box-border h-[3.625rem] border-b-[1px] border-solid border-neutral-light-grey-2"
                name="OTPPin1"
                type="number"
              />
              <input
                className="[border:none] [outline:none] bg-[transparent] w-[3.625rem] box-border h-[3.625rem] border-b-[1px] border-solid border-neutral-light-grey-2"
                name="OTPPin2"
                type="number"
              />
              <input
                className="[border:none] [outline:none] bg-[transparent] w-[3.625rem] box-border h-[3.625rem] border-b-[1px] border-solid border-neutral-light-grey-2"
                name="OTPPin3"
                type="number"
              />
              <input
                className="[border:none] [outline:none] bg-[transparent] w-[3.625rem] box-border h-[3.625rem] border-b-[1px] border-solid border-neutral-light-grey-2"
                name="OTPPin4"
                type="text"
              />
              <input
                className="[border:none] [outline:none] bg-[transparent] w-[3.625rem] box-border h-[3.625rem] border-b-[1px] border-solid border-neutral-light-grey-2"
                name="OTPPin5"
                type="number"
              />
              <input
                className="[border:none] [outline:none] bg-[transparent] w-[3.625rem] box-border h-[3.625rem] border-b-[1px] border-solid border-neutral-light-grey-2"
                name="OTPPin6"
                type="number"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[0.5rem]">
              <div className="relative">A code has been sent to your phone</div>
              <div className="flex flex-row items-start justify-start text-[1rem] text-semantic-blue">
                <div className="relative font-medium">Resend in 00:57</div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer py-[0.25rem] px-[1.25rem] bg-[transparent] self-stretch rounded-xl [background:linear-gradient(90deg,_#11998e,_#38ef7d)] box-border h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center border-[1px] border-solid border-primary-main-color"
          id="OTPConfirm"
          onClick={onLogInClick}
        >
          <div className="relative text-[1rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-center">
            Confirm
          </div>
        </button>
      </section>
      <div className="absolute bottom-[0rem] left-[calc(50%_-_214px)] [backdrop-filter:blur(108.73px)] bg-darkslategray-300 w-[26.75rem] h-[18.125rem] text-[0.625rem]">
        <div className="absolute w-full right-[0rem] bottom-[0rem] left-[0rem] h-[2.125rem]">
          <div className="absolute bottom-[0.5rem] left-[calc(50%_-_67px)] rounded-81xl bg-label-color-dark-primary w-[8.375rem] h-[0.313rem]" />
        </div>
        <div className="absolute w-[calc(100%_-_12px)] top-[3.563rem] right-[0.375rem] left-[0.375rem] h-[2.875rem] flex flex-row items-start justify-start gap-[0.312rem]">
          <div className="self-stretch flex-1 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
            <b className="absolute h-[28.48%] w-[calc(100%_-_0.3px)] top-[62.61%] left-[0rem] tracking-[2px] hidden">
              ABC
            </b>
            <div className="absolute w-[calc(100%_-_0.3px)] top-[calc(50%_-_21px)] left-[0rem] text-[1.563rem] tracking-[0.29px] flex items-center justify-center h-[1.625rem]">
              1
            </div>
          </div>
          <div className="self-stretch flex-1 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
            <b className="absolute h-[28.48%] w-[calc(100%_-_0.3px)] top-[62.61%] left-[0rem] tracking-[2px] inline-block">
              ABC
            </b>
            <div className="absolute w-[calc(100%_-_0.3px)] top-[calc(50%_-_21px)] left-[0rem] text-[1.563rem] tracking-[0.29px] flex items-center justify-center h-[1.625rem]">
              2
            </div>
          </div>
          <div className="self-stretch flex-1 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
            <b className="absolute h-[28.48%] w-[calc(100%_-_0.3px)] top-[62.61%] left-[0rem] tracking-[2px] inline-block">
              DEF
            </b>
            <div className="absolute w-[calc(100%_-_0.3px)] top-[calc(50%_-_21px)] left-[0rem] text-[1.563rem] tracking-[0.29px] flex items-center justify-center h-[1.625rem]">
              3
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_12px)] top-[6.875rem] right-[0.375rem] left-[0.375rem] h-[2.875rem] flex flex-row items-start justify-start gap-[0.312rem]">
          <div className="self-stretch flex-1 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
            <b className="absolute h-[28.48%] w-[calc(100%_-_0.3px)] top-[62.61%] left-[0rem] tracking-[2px] inline-block">
              GHI
            </b>
            <div className="absolute w-[calc(100%_-_0.3px)] top-[calc(50%_-_21px)] left-[0rem] text-[1.563rem] tracking-[0.29px] flex items-center justify-center h-[1.625rem]">
              4
            </div>
          </div>
          <div className="self-stretch flex-1 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
            <b className="absolute h-[28.48%] w-[calc(100%_-_0.3px)] top-[62.61%] left-[0rem] tracking-[2px] inline-block">
              JKL
            </b>
            <div className="absolute w-[calc(100%_-_0.3px)] top-[calc(50%_-_21px)] left-[0rem] text-[1.563rem] tracking-[0.29px] flex items-center justify-center h-[1.625rem]">
              5
            </div>
          </div>
          <div className="self-stretch flex-1 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
            <b className="absolute h-[28.48%] w-[calc(100%_-_0.3px)] top-[62.61%] left-[0rem] tracking-[2px] inline-block">
              MNO
            </b>
            <div className="absolute w-[calc(100%_-_0.3px)] top-[calc(50%_-_21px)] left-[0rem] text-[1.563rem] tracking-[0.29px] flex items-center justify-center h-[1.625rem]">
              6
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_12px)] top-[10.188rem] right-[0.375rem] left-[0.375rem] h-[2.875rem] flex flex-row items-start justify-start gap-[0.312rem]">
          <div className="self-stretch flex-1 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
            <b className="absolute h-[28.48%] w-[calc(100%_-_0.3px)] top-[62.61%] left-[0rem] tracking-[2px] inline-block">
              PQRS
            </b>
            <div className="absolute w-[calc(100%_-_0.3px)] top-[calc(50%_-_21px)] left-[0rem] text-[1.563rem] tracking-[0.29px] flex items-center justify-center h-[1.625rem]">
              7
            </div>
          </div>
          <div className="self-stretch flex-1 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
            <b className="absolute h-[28.48%] w-[calc(100%_-_0.3px)] top-[62.61%] left-[0rem] tracking-[2px] inline-block">
              TUV
            </b>
            <div className="absolute w-[calc(100%_-_0.3px)] top-[calc(50%_-_21px)] left-[0rem] text-[1.563rem] tracking-[0.29px] flex items-center justify-center h-[1.625rem]">
              8
            </div>
          </div>
          <div className="self-stretch flex-1 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
            <b className="absolute h-[28.48%] w-[calc(100%_-_0.3px)] top-[62.61%] left-[0rem] tracking-[2px] inline-block">
              WXYZ
            </b>
            <div className="absolute w-[calc(100%_-_0.3px)] top-[calc(50%_-_21px)] left-[0rem] text-[1.563rem] tracking-[0.29px] flex items-center justify-center h-[1.625rem]">
              9
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_12px)] top-[13.5rem] right-[0.375rem] left-[0.375rem] h-[2.875rem] flex flex-row items-start justify-start gap-[0.312rem]">
          <div className="self-stretch flex-1 relative">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100 hidden" />
            <b className="absolute h-[28.48%] w-[calc(100%_-_0.3px)] top-[62.61%] left-[0rem] tracking-[2px] hidden">
              ABC
            </b>
            <div className="absolute w-[calc(100%_-_0.3px)] top-[calc(50%_-_21px)] left-[0rem] text-[1.563rem] tracking-[0.29px] hidden items-center justify-center h-[1.625rem]">
              Q
            </div>
          </div>
          <div className="self-stretch flex-1 relative text-[1.563rem]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
            <div className="absolute w-[calc(100%_-_0.3px)] top-[calc(50%_-_19px)] left-[0rem] tracking-[0.29px] flex items-center justify-center">
              0
            </div>
          </div>
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
            alt=""
            src="/-key2.svg"
          />
        </div>
        <div className="absolute top-[0.313rem] left-[0.375rem] [backdrop-filter:blur(108.73px)] bg-darkslategray-200 w-[26rem] h-[2.875rem] overflow-hidden text-[1.063rem]">
          <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_30px)] tracking-[-0.41px] leading-[1.375rem]">
            123 456
          </div>
          <div className="absolute top-[calc(50%_-_18px)] left-[calc(50%_-_43px)] text-[0.688rem] tracking-[0.07px] leading-[0.813rem]">
            From Messages
          </div>
          <div className="absolute top-[calc(50%_-_10px)] left-[1.938rem] rounded-12xs bg-default-systemgray-02-dark w-[0.063rem] h-[1.563rem] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]" />
          <div className="absolute top-[calc(50%_-_10px)] right-[1.813rem] rounded-12xs bg-default-systemgray-02-dark w-[0.063rem] h-[1.563rem] [transform:_rotate(180deg)] [transform-origin:0_0] opacity-[0.5]" />
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[4.063rem] left-[1.5rem] w-[1.75rem] h-[1.75rem]"
        id="BackBtn"
        onClick={onFrameClick}
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

export default VerifyOTP;
