import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Statistic: NextPage = () => {
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

  const onAccountClick = useCallback(() => {
    router.push("/account");
  }, [router]);

  return (
    <div className="w-full relative rounded-21xl bg-primary-black h-[57.875rem] overflow-hidden text-center text-[1.25rem] text-label-color-dark-primary font-body-regular-16">
      <div className="absolute top-[3.813rem] left-[calc(50%_-_33px)] font-medium">
        Report
      </div>
      <div className="absolute top-[0rem] left-[calc(50%_-_194px)] w-[24.563rem] h-[3.313rem] flex flex-row items-end justify-center text-[1.063rem]">
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
      <nav
        className="m-0 absolute bottom-[0rem] left-[calc(50%_-_214px)] shadow-[0px_-10px_70px_rgba(255,_255,_255,_0.07)] rounded-t-none rounded-b-21xl bg-primary-black w-[26.75rem] h-[5.625rem] flex flex-row items-center justify-between p-[1.25rem] box-border"
        id="NavMenu"
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
        >
          <img
            className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/frame4.svg"
          />
          <div className="relative text-[0.75rem] font-medium font-body-regular-16 text-transparent !bg-clip-text [background:linear-gradient(90deg,_#11998e,_#38ef7d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
            Statistic
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-start gap-[0.25rem]"
          id="NavAccountBtn"
          onClick={onAccountClick}
        >
          <img
            className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/2--regular--user.svg"
          />
          <div className="relative text-[0.75rem] font-medium font-body-regular-16 text-neutral-dark-grey text-left">
            Account
          </div>
        </button>
      </nav>
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
      <div className="absolute top-[9.875rem] left-[12.25rem] bg-gray-300 w-[1rem] h-[3.625rem]" />
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
      <main
        className="absolute top-[7.188rem] left-[1.25rem] w-[24.406rem] flex flex-col items-start justify-start gap-[1.5rem]"
        id="StatisticSection"
      >
        <section
          className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[0.875rem] text-tb font-body-regular-16"
          id="StatisticSection1"
        >
          <div className="self-stretch flex flex-row items-start justify-between">
            <div className="flex flex-col items-start justify-center gap-[0.25rem]">
              <div className="relative leading-[150%]">Balance</div>
              <div className="relative text-[1.5rem] font-medium text-label-color-dark-primary">
                $ 34,378,44
              </div>
            </div>
            <div className="h-[1.563rem] flex flex-row items-center justify-start gap-[0.25rem]">
              <div className="relative leading-[130%]">Monthly</div>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[0.938rem] relative h-[0.938rem]"
                id="StatisticFilterBtn"
              >
                <img
                  className="absolute h-2/5 w-4/5 top-[30%] right-[10%] bottom-[30%] left-[10%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/vector3.svg"
                />
              </button>
            </div>
          </div>
          <div className="w-[24.375rem] relative h-[13.875rem] text-label-color-dark-primary">
            <img
              className="absolute top-[2.031rem] left-[0rem] w-[24.375rem] h-[9.581rem] object-cover"
              id="StatisticImage1"
              alt=""
              src="/graphic@2x.png"
            />
            <div className="absolute top-[12.563rem] left-[0rem] w-[24.375rem] flex flex-row items-center justify-between">
              <div className="relative leading-[150%]">Jan</div>
              <div className="relative leading-[150%]">Mar</div>
              <div className="relative leading-[150%]">Apr</div>
              <div className="relative leading-[150%]">Mei</div>
              <div className="relative leading-[150%]">Jun</div>
              <div className="relative leading-[150%]">Jul</div>
            </div>
            <div className="absolute top-[2.031rem] left-[13.844rem] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.07),_rgba(255,_255,_255,_0))] h-[9.25rem] flex flex-row items-center justify-center pt-[0.125rem] px-[0.5rem] pb-[0rem] box-border">
              <img
                className="w-[0.331rem] relative max-w-full overflow-hidden h-[9.375rem]"
                alt=""
                src="/vector-2.svg"
              />
            </div>
            <div className="absolute top-[0rem] left-[12.531rem] shadow-[0px_4px_8px_rgba(56,_239,_125,_0.1)] rounded-21xl bg-mediumseagreen flex flex-row items-center justify-center py-[0.25rem] px-[0.5rem] text-[0.75rem]">
              <div className="relative leading-[130%]">+ $32,00</div>
            </div>
          </div>
        </section>
        <section
          className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] text-left text-[1rem] text-label-color-dark-primary font-body-regular-16"
          id="TransactionHistorySection"
        >
          <div className="self-stretch flex flex-row items-start justify-between">
            <div className="relative font-medium">Transaction History</div>
            <div className="h-[1.563rem] flex flex-row items-center justify-start gap-[0.25rem] text-[0.875rem] text-tb">
              <div className="relative">Monthly</div>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[0.938rem] relative h-[0.938rem]"
                id="TransactionHistoryFilterBtn"
              >
                <img
                  className="absolute h-2/5 w-4/5 top-[30%] right-[10%] bottom-[30%] left-[10%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/vector3.svg"
                />
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-[0.875rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="w-[3.125rem] relative rounded-[50%] bg-silver h-[3.125rem]" />
              <div className="self-stretch flex-1 flex flex-col items-start justify-center gap-[0.25rem]">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative">Steven Ricardo</div>
                  <div className="relative text-springgreen">+ $29,00</div>
                </div>
                <div className="relative text-[0.75rem] leading-[130%] text-tb">
                  Sunday, 12 Jan 22
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="w-[3.125rem] relative rounded-[50%] bg-silver h-[3.125rem]" />
              <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative">Idlix</div>
                  <div className="relative text-[0.75rem] leading-[130%] text-tb">
                    Sunday, 8 Jan 22
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-[0.25rem] text-springgreen">
                  <div className="relative">+ $29,00</div>
                  <div className="relative text-[0.75rem] leading-[130%] text-tb">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="w-[3.125rem] relative rounded-[50%] bg-silver h-[3.125rem]" />
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative">Melia Purwanti</div>
                  <div className="relative text-tomato">- $14,37</div>
                </div>
                <div className="relative text-[0.75rem] leading-[130%] text-tb">
                  Friday, 26 Dec 21
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="w-[3.125rem] relative rounded-[50%] bg-silver h-[3.125rem]" />
              <div className="self-stretch flex-1 flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative">Fb</div>
                  <div className="relative text-[0.75rem] leading-[130%] text-tb">
                    Sunday, 8 Jan 22
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center gap-[0.25rem] text-springgreen">
                  <div className="relative">+ $29,00</div>
                  <div className="relative text-[0.75rem] leading-[130%] text-tb">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="w-[3.125rem] relative rounded-[50%] bg-silver h-[3.125rem]" />
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.25rem]">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative">Robin Swan</div>
                  <div className="relative text-tomato">- $71,57</div>
                </div>
                <div className="relative text-[0.75rem] leading-[130%] text-tb">
                  Friday, 16 Dec 21
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Statistic;
