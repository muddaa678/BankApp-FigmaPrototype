import type { NextPage } from "next";
import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Switch } from "antd";
import { useRouter } from "next/router";

const Account: NextPage = () => {
  const router = useRouter();

  const onProductClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onBlogClick = useCallback(() => {
    router.push("/transactions");
  }, [router]);

  const onFrameButtonClick = useCallback(() => {
    router.push("/transfer");
  }, [router]);

  const onBlogClick1 = useCallback(() => {
    router.push("/statistic");
  }, [router]);

  return (
    <div className="w-full relative rounded-21xl bg-primary-black h-[57.875rem] overflow-hidden text-center text-[1.25rem] text-label-color-dark-primary font-body-regular-16">
      <div className="absolute top-[3.813rem] left-[10.719rem] font-medium">
        Account
      </div>
      <div className="absolute top-[0rem] left-[calc(50%_-_196px)] w-[24.563rem] h-[3.313rem] flex flex-row items-end justify-center text-[1.063rem]">
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
      <div className="absolute top-[7.188rem] left-[8.094rem] flex flex-col items-center justify-start gap-[0.5rem] text-left text-[1rem]">
        <div className="w-[5.5rem] relative rounded-[200px] bg-silver h-[5.5rem] overflow-hidden shrink-0" />
        <div className="flex flex-col items-center justify-start">
          <div className="relative font-medium">Emmie Watson</div>
          <div className="relative text-[0.875rem] text-neutral-light-grey">
            emmie1709@gmail.com
          </div>
        </div>
      </div>
      <section
        className="absolute top-[17.5rem] left-[0rem] w-[26.75rem] flex flex-col items-center justify-start py-[1.5rem] px-[1.25rem] box-border gap-[1.5rem] text-left text-[1rem] text-label-color-dark-primary font-body-regular-16"
        id="AccountSettingSection"
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <div className="relative font-semibold">My Account</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[0.75rem]"
              id="PersonalInfoBtn"
            >
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/frame5.svg"
              />
              <div className="self-stretch flex-1 relative text-[0.875rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-left flex items-center">
                Personal information
              </div>
            </button>
            <div className="self-stretch flex flex-row items-center justify-between">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0.75rem]">
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/frame6.svg"
                />
                <div className="self-stretch flex-1 relative leading-[1.5rem] font-medium flex items-center">
                  Language
                </div>
              </div>
              <div className="relative leading-[1.5rem] text-neutral-light-grey">
                English (US)
              </div>
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[0.75rem]"
              id="PrivacyPolicyBtn"
            >
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/frame7.svg"
              />
              <div className="self-stretch flex-1 relative text-[0.875rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-left flex items-center">
                Privacy Policy
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[0.75rem]"
              id="SettingBtn"
            >
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/setting.svg"
              />
              <div className="self-stretch flex-1 relative text-[0.875rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-left flex items-center">
                Setting
              </div>
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <div className="relative font-semibold">Notifications</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[0.875rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
              <img
                className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src="/icon.svg"
              />
              <div className="self-stretch flex-1 relative leading-[1.5rem] font-medium flex items-center">
                Push Notifications
              </div>
              <Switch className="w-[2rem] relative" style={{ width: 32 }} />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0.75rem]">
              <img
                className="w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
                alt=""
                src="/icon.svg"
              />
              <div className="self-stretch flex-1 relative leading-[1.5rem] font-medium flex items-center">
                Promotional Notifications
              </div>
              <Switch className="w-[2rem] relative" style={{ width: 32 }} />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <div className="relative font-semibold">More</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[0.75rem]"
              id="HelpCenterBtn"
            >
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/frame8.svg"
              />
              <div className="self-stretch flex-1 relative text-[0.875rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-left flex items-center">
                Help Center
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-center justify-start gap-[0.75rem]"
              id="LogoutBtn"
            >
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/frame9.svg"
              />
              <div className="self-stretch flex-1 relative text-[0.875rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-left flex items-center">
                Log Out
              </div>
            </button>
          </div>
        </div>
      </section>
      <section
        className="absolute bottom-[0rem] left-[calc(50%_-_214px)] shadow-[0px_-10px_70px_rgba(255,_255,_255,_0.07)] rounded-t-none rounded-b-21xl bg-primary-black w-[26.75rem] h-[5.625rem] flex flex-row items-center justify-between p-[1.25rem] box-border"
        id="FooterNav"
      >
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] h-[2.875rem] flex flex-col items-center justify-between"
          id="NavHomeBtn"
          onClick={onProductClick}
        >
          <img
            className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/frame3.svg"
          />
          <div className="relative text-[0.75rem] font-medium font-body-regular-16 text-neutral-dark-grey text-left">
            Home
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start gap-[0.25rem]"
          id="NavWalletBtn"
          onClick={onBlogClick}
        >
          <img
            className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/frame1.svg"
          />
          <div className="relative text-[0.75rem] leading-[150%] font-semibold font-open-sans text-neutral-dark-grey text-left">
            Wallet
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center relative gap-[0.5rem]"
          id="NavTransferBtn"
          onClick={onFrameButtonClick}
        >
          <div className="w-[2.75rem] relative rounded-[50%] [background:linear-gradient(90deg,_#11998e,_#38ef7d)] h-[2.75rem] z-[0]" />
          <img
            className="w-[1.75rem] absolute !m-[0] top-[0.5rem] left-[0.5rem] h-[1.75rem] object-cover z-[1]"
            alt=""
            src="/swap-horiz-24px@2x.png"
          />
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start gap-[0.25rem]"
          id="NavStatisticBtn"
          onClick={onBlogClick1}
        >
          <img
            className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/frame2.svg"
          />
          <div className="relative text-[0.75rem] font-medium font-body-regular-16 text-neutral-dark-grey text-left">
            Statistic
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start gap-[0.25rem]"
          id="NavAccountBtn"
        >
          <img
            className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/2--regular--user1.svg"
          />
          <div className="relative text-[0.75rem] font-medium font-body-regular-16 text-transparent !bg-clip-text [background:linear-gradient(90deg,_#11998e,_#38ef7d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
            Account
          </div>
        </button>
      </section>
    </div>
  );
};

export default Account;
