import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const ForgotPassword: NextPage = () => {
  const router = useRouter();

  const onLogInClick = useCallback(() => {
    router.push("/verify-o-t-p");
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
      <div className="absolute top-[3.813rem] left-[calc(50%_-_106px)] text-[1.5rem] font-medium">
        Forgot Password
      </div>
      <div className="absolute top-[10.875rem] left-[1.5rem] text-[0.875rem] text-left inline-block w-[23.75rem]">
        Enter the email associated with your account and we’ll send an email
        with code to reset your password
      </div>
      <section
        className="absolute top-[15.5rem] left-[1.5rem] w-[23.75rem] flex flex-col items-start justify-start gap-[2.5rem] text-center text-[1rem] text-primary-black font-body-regular-16"
        id="ForgotPasswordSection"
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
          <div className="relative">Email</div>
          <input
            className="[border:none] [outline:none] font-body-regular-16 text-[0.875rem] bg-gray-500 self-stretch rounded-lg h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.812rem] px-[1rem] box-border text-neutral-light-grey-2"
            name="useremail"
            placeholder="Text your email"
            type="email"
          />
        </div>
        <button
          className="cursor-pointer [border:none] py-[0.25rem] px-[1.25rem] bg-[transparent] self-stretch rounded-xl [background:linear-gradient(90deg,_#11998e,_#38ef7d)] h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border"
          id="ResetPasswordBtn"
          onClick={onLogInClick}
        >
          <div className="relative text-[1rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-center">
            Confirm
          </div>
        </button>
      </section>
      <div className="absolute bottom-[0rem] left-[calc(50%_-_214px)] [backdrop-filter:blur(108.73px)] bg-darkslategray-200 w-[26.75rem] h-[18.125rem] overflow-hidden text-[1.625rem]">
        <div className="absolute w-[calc(100%_-_6px)] top-[0.5rem] right-[0.188rem] left-[0.188rem] h-[9.375rem]">
          <div className="absolute w-full top-[0rem] right-[0rem] left-[0rem] h-[2.625rem]">
            <div className="absolute w-[calc(100%_-_385px)] top-[0rem] right-[24.063rem] left-[0rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                q
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_386px)] top-[0rem] right-[21.438rem] left-[2.688rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                w
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_384px)] top-[0rem] right-[18.688rem] left-[5.313rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                e
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_386px)] top-[0rem] right-[16.063rem] left-[8.063rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                r
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_385px)] top-[0rem] right-[13.375rem] left-[10.688rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                t
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_385px)] top-[0rem] right-[10.688rem] left-[13.375rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                y
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_386px)] top-[0rem] right-[8.063rem] left-[16.063rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                u
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_384px)] top-[0rem] right-[5.313rem] left-[18.688rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                i
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_386px)] top-[0rem] right-[2.688rem] left-[21.438rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                o
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_385px)] top-[0rem] right-[0rem] left-[24.063rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                p
              </div>
            </div>
          </div>
          <div className="absolute w-[calc(100%_-_38px)] top-[3.375rem] right-[1.188rem] left-[1.188rem] h-[2.625rem]">
            <div className="absolute w-[calc(100%_-_346px)] top-[0rem] right-[21.625rem] left-[0rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                a
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_348px)] top-[0rem] right-[19rem] left-[2.75rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                s
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_346px)] top-[0rem] right-[16.25rem] left-[5.375rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                d
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_346px)] top-[0rem] right-[13.5rem] left-[8.125rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                f
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_348px)] top-[0rem] right-[10.875rem] left-[10.875rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                g
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_346px)] top-[0rem] right-[8.125rem] left-[13.5rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                h
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_346px)] top-[0rem] right-[5.375rem] left-[16.25rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                j
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_348px)] top-[0rem] right-[2.75rem] left-[19rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                k
              </div>
            </div>
            <div className="absolute w-[calc(100%_-_346px)] top-[0rem] right-[0rem] left-[21.625rem] h-[2.625rem]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
              <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                l
              </div>
            </div>
          </div>
          <div className="absolute w-full top-[6.75rem] right-[0rem] left-[0rem] h-[2.625rem]">
            <div className="absolute w-[calc(100%_-_116px)] top-[0rem] right-[3.625rem] left-[3.625rem] h-[2.625rem]">
              <div className="absolute w-[calc(100%_-_267px)] top-[0rem] right-[16.688rem] left-[0rem] h-[2.625rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
                <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                  z
                </div>
              </div>
              <div className="absolute w-[calc(100%_-_269px)] top-[0rem] right-[14rem] left-[2.813rem] h-[2.625rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
                <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                  x
                </div>
              </div>
              <div className="absolute w-[calc(100%_-_267px)] top-[0rem] right-[11.188rem] left-[5.5rem] h-[2.625rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
                <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                  c
                </div>
              </div>
              <div className="absolute w-[calc(100%_-_266px)] top-[0rem] right-[8.313rem] left-[8.313rem] h-[2.625rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
                <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                  v
                </div>
              </div>
              <div className="absolute w-[calc(100%_-_268px)] top-[0rem] right-[5.563rem] left-[11.188rem] h-[2.625rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
                <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                  b
                </div>
              </div>
              <div className="absolute w-[calc(100%_-_268px)] top-[0rem] right-[2.813rem] left-[13.938rem] h-[2.625rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
                <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                  n
                </div>
              </div>
              <div className="absolute w-[calc(100%_-_267px)] top-[0rem] right-[0rem] left-[16.688rem] h-[2.625rem]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
                <div className="absolute w-full top-[calc(50%_-_20px)] left-[0rem] tracking-[0.36px] leading-[2.125rem] font-light flex items-end justify-center">
                  m
                </div>
              </div>
            </div>
            <img
              className="absolute top-[0rem] left-[0rem] w-[2.625rem] h-[2.625rem]"
              alt=""
              src="/-key.svg"
            />
            <img
              className="absolute top-[0rem] right-[0rem] w-[2.625rem] h-[2.625rem]"
              alt=""
              src="/-key1.svg"
            />
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_6px)] top-[10.625rem] right-[0.188rem] left-[0.188rem] flex flex-row items-start justify-start gap-[0.375rem] text-[1rem]">
          <div className="w-[5.688rem] relative h-[2.625rem]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-darkslategray-100" />
            <div className="absolute w-full top-[calc(50%_-_10px)] left-[0rem] tracking-[-0.32px] leading-[1.313rem] flex items-center justify-center">
              123
            </div>
          </div>
          <div className="flex-1 relative h-[2.625rem]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-dimgray-100" />
            <div className="absolute w-full top-[calc(50%_-_10px)] left-[0rem] tracking-[-0.32px] leading-[1.313rem] flex items-center justify-center">
              space
            </div>
          </div>
          <div className="w-[5.688rem] relative h-[2.625rem]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] shadow-[0px_1px_0px_rgba(0,_0,_0,_0.3)] rounded-8xs-6 bg-darkslategray-100" />
            <div className="absolute w-full top-[calc(50%_-_10px)] left-[0rem] tracking-[-0.32px] leading-[1.313rem] flex items-center justify-center">
              return
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_62px)] top-[14.688rem] right-[1.938rem] left-[1.938rem] flex flex-row items-start justify-between">
          <img
            className="w-[1.688rem] relative h-[1.688rem]"
            alt=""
            src="/icon--emoji.svg"
          />
          <img
            className="w-[1.188rem] relative h-[1.75rem]"
            alt=""
            src="/icon--dictation.svg"
          />
        </div>
        <div className="absolute w-[calc(100%_-_1px)] right-[0rem] bottom-[0rem] left-[0.063rem] h-[2.125rem]">
          <div className="absolute bottom-[0.5rem] left-[calc(50%_-_66.5px)] rounded-81xl bg-label-color-dark-primary w-[8.375rem] h-[0.313rem]" />
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

export default ForgotPassword;
