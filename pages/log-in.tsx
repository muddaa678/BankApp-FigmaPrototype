import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const LogIn: NextPage = () => {
  const router = useRouter();

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
      <section
        className="absolute top-[10.813rem] left-[1.5rem] w-[23.75rem] flex flex-col items-start justify-start text-center text-[1rem] text-label-color-dark-primary font-body-regular-16"
        id="LoginSection"
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
              <div className="relative">Email</div>
              <input
                className="[border:none] [outline:none] font-body-regular-16 text-[0.875rem] bg-gray-500 self-stretch rounded-xl h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.812rem] px-[1rem] box-border text-neutral-light-grey-2"
                name="useremail"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="w-[23.75rem] flex flex-col items-start justify-start gap-[0.75rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative">Password</div>
                <input
                  className="[border:none] [outline:none] font-body-regular-16 text-[0.875rem] bg-gray-500 self-stretch rounded-xl h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center py-[0.812rem] px-[1rem] box-border text-neutral-light-grey-2"
                  name="userpassword"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem] text-left text-[0.75rem]">
                <input
                  className="m-0 w-[1rem] relative h-[1rem] overflow-hidden shrink-0"
                  id="RememberMeCB"
                  type="checkbox"
                />
                <div className="flex-1 relative">Remember me</div>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[0.75rem] font-body-regular-16 text-neutral-light-grey-2 text-right inline-block"
                  id="ForgotPasswordBtn"
                >
                  Forgot password?
                </button>
              </div>
            </div>
          </div>
          <div className="w-[23.75rem] flex flex-col items-start justify-start gap-[1.75rem] text-left text-neutral-light-grey-2">
            <button
              className="cursor-pointer [border:none] py-[0.25rem] px-[1.25rem] bg-[transparent] self-stretch rounded-xl [background:linear-gradient(90deg,_#11998e,_#38ef7d)] h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border"
              id="LoginBtn"
            >
              <div className="relative text-[1rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-center">
                Log In
              </div>
            </button>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.5rem]">
              <div className="flex-1 relative bg-gainsboro h-[0.063rem]" />
              <div className="relative">Or</div>
              <div className="flex-1 relative bg-gainsboro h-[0.063rem]" />
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[1.25rem] text-center text-[0.875rem] text-neutral-dark-grey">
              <div className="self-stretch flex flex-col items-center justify-start gap-[1.25rem]">
                <button
                  className="cursor-pointer [border:none] py-[0.25rem] px-[1.25rem] bg-gray-500 self-stretch rounded-xl h-[3rem] flex flex-row items-center justify-center box-border gap-[0.5rem]"
                  id="GoogleBtn"
                >
                  <img
                    className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                    alt=""
                    src="/google.svg"
                  />
                  <div className="relative text-[1rem] font-medium font-body-regular-16 text-label-color-dark-primary text-center">
                    Continue with Google
                  </div>
                </button>
                <button
                  className="cursor-pointer [border:none] py-[0.25rem] px-[1.25rem] bg-gray-500 self-stretch rounded-xl h-[3rem] flex flex-row items-center justify-center box-border gap-[0.5rem]"
                  id="FacebookBtn"
                >
                  <img
                    className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                    alt=""
                    src="/frame.svg"
                  />
                  <div className="relative text-[1rem] font-medium font-body-regular-16 text-label-color-dark-primary text-center">
                    Continue with Facebook
                  </div>
                </button>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[1.5rem]">
                  <span>{`Dont’t have an account? `}</span>
                  <span className="text-semantic-blue">Register</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute top-[3.813rem] left-[calc(50%_-_35px)] text-[1.5rem] font-medium">
        Log In
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[4.063rem] left-[1.5rem] w-[1.75rem] h-[1.75rem]"
        autoFocus={true}
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

export default LogIn;
