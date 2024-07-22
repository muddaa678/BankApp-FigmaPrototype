import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const onButtomContainerClick = useCallback(() => {
    router.push("/top-up");
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

  const onAccountClick = useCallback(() => {
    router.push("/account");
  }, [router]);

  return (
    <div className="w-full relative rounded-21xl bg-primary-black h-[57.875rem] overflow-hidden text-center text-[1.063rem] text-label-color-dark-primary font-body-regular-16">
      <main
        className="absolute top-[3.813rem] left-[1.125rem] w-[24.375rem] flex flex-col items-end justify-start gap-[1.5rem] text-left text-[1rem] text-label-color-dark-primary font-body-regular-16"
        id="HomeSection"
      >
        <div className="self-stretch flex flex-row items-start justify-between py-[0.5rem] px-[0rem] text-[1.25rem]">
          <nav className="m-0 w-[1.5rem] relative bg-gray-400 h-[1.5rem] overflow-hidden shrink-0">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[81.25%] w-[81.25%] top-[8.33%] right-[10.42%] bottom-[10.42%] left-[8.33%]"
              id="MenuBtn"
            >
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/category.svg"
              />
            </button>
          </nav>
          <h1 className="m-0 relative text-inherit font-medium font-inherit">
            My Dashboard
          </h1>
          <button
            className="cursor-pointer [border:none] p-0 bg-gray-400 w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
            id="NotifBtn"
          >
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[89.58%] w-[77.08%] top-[4.17%] right-[10.42%] bottom-[6.25%] left-[12.5%]"
              id="NotifBtn"
            >
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/notification.svg"
              />
            </button>
          </button>
        </div>
        <section
          className="self-stretch flex flex-col items-center justify-start gap-[1.5rem] text-left text-[0.875rem] text-label-color-dark-primary font-body-regular-16"
          id="CardSnippet"
        >
          <div className="self-stretch flex flex-row items-center justify-start gap-[1.5rem]">
            <div className="flex-1 rounded-xl [background:radial-gradient(50%_50%_at_50%_50%,_#1d976c,_#51ce8f_60.42%,_#239e70_89.28%,_#50cd8e)] h-[11.625rem] flex flex-col items-start justify-center py-[0.75rem] px-[0.875rem] box-border gap-[3.5rem]">
              <div className="flex flex-col items-start justify-center gap-[0.25rem]">
                <div className="relative leading-[130%]">Balance</div>
                <div className="relative text-[1.625rem] leading-[130%]">
                  $ 34,378,44
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative leading-[130%]">Number</div>
                  <div className="relative leading-[130%]">
                    3554 7634 2647 0237
                  </div>
                </div>
                <div className="w-[2.438rem] flex flex-col items-start justify-start gap-[0.25rem]">
                  <div className="relative leading-[130%]">Exp</div>
                  <div className="relative leading-[130%]">24/26</div>
                </div>
              </div>
            </div>
            <div className="w-[3.125rem] rounded-xl box-border h-[11.625rem] flex flex-col items-center justify-center p-[0.5rem] border-[1px] border-dashed border-tb">
              <button
                className="cursor-pointer [border:none] p-0 bg-springgreen w-[1rem] relative h-[0.956rem]"
                id="AddCardBtn"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-center gap-[1rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="flex-1 rounded-3xs bg-t1 h-[3.375rem] flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/send.svg"
                />
                <div className="relative">Transfer</div>
              </div>
              <div
                className="flex-1 rounded-3xs bg-t1 h-[3.375rem] flex flex-row items-center justify-center gap-[0.5rem] cursor-pointer"
                onClick={onButtomContainerClick}
              >
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/pluscircle.svg"
                />
                <div className="relative">Top Up</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="flex-1 rounded-3xs bg-t1 h-[3.375rem] flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/scan.svg"
                />
                <div className="relative">Scan</div>
              </div>
              <div className="flex-1 rounded-3xs bg-t1 h-[3.375rem] flex flex-row items-center justify-center gap-[0.5rem]">
                <img
                  className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                  alt=""
                  src="/arrow--down-square.svg"
                />
                <div className="relative">Receive</div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="relative font-medium">Recent Activity</div>
            <div className="self-stretch w-[4.125rem] flex flex-row items-center justify-between text-[0.875rem] text-tb">
              <div className="relative leading-[130%]">3 Days</div>
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[0.938rem] relative h-[0.938rem]"
                id="FilterBtn"
              >
                <img
                  className="absolute h-2/5 w-4/5 top-[30%] right-[10%] bottom-[30%] left-[10%] max-w-full overflow-hidden max-h-full object-contain"
                  alt=""
                  src="/vector3.svg"
                />
              </button>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-center gap-[1.25rem] text-[0.875rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="w-[3.125rem] relative rounded-[50%] bg-silver h-[3.125rem]" />
              <div className="flex-1 h-[2.563rem] flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative">Skylar Dorwart</div>
                  <div className="relative text-tomato">- $24,52</div>
                </div>
                <div className="relative text-[0.75rem] leading-[130%] text-tb">
                  May 11, 2018
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="w-[3.125rem] relative rounded-[50%] bg-silver h-[3.125rem]" />
              <div className="flex-1 h-[3.188rem] flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative">Rayna Dorwart</div>
                  <div className="relative text-tomato">- $14,37</div>
                </div>
                <div className="relative text-[0.75rem] leading-[130%] text-tb">
                  May 9, 2018
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <div className="w-[3.125rem] relative rounded-[50%] bg-silver h-[3.125rem]" />
              <div className="flex-1 h-[2.563rem] flex flex-col items-start justify-between">
                <div className="self-stretch flex flex-row items-center justify-between">
                  <div className="relative">Jaydon Korsgaard</div>
                  <div className="relative text-springgreen">+ $4,40</div>
                </div>
                <div className="relative text-[0.75rem] leading-[130%] text-tb">
                  May 2, 2018
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="self-stretch relative font-medium">
            Quick Transaction
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[1.25rem] text-[0.875rem]">
            <div className="flex flex-col items-center justify-start gap-[0.687rem]">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] w-[3.775rem] relative h-[3.75rem]"
                id="QuickTransactionBtn"
              >
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] box-border w-[3.775rem] h-[3.75rem] border-[1px] border-dashed border-t" />
                <img
                  className="absolute top-[1.244rem] left-[1.25rem] w-[1.269rem] h-[1.269rem] overflow-hidden"
                  alt=""
                  src="/chevronright.svg"
                />
              </button>
              <div className="relative leading-[130%]">See All</div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[0.687rem]">
              <div className="w-[3.775rem] relative rounded-[50%] bg-silver h-[3.75rem]" />
              <div className="relative leading-[130%]">Rendy</div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[0.687rem]">
              <div className="w-[3.775rem] relative rounded-[50%] bg-silver h-[3.75rem]" />
              <div className="relative leading-[130%]">Mitha</div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[0.687rem]">
              <div className="w-[3.775rem] relative rounded-[50%] bg-silver h-[3.75rem]" />
              <div className="relative leading-[130%]">Samuel</div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[0.687rem]">
              <div className="w-[3.775rem] relative rounded-[50%] bg-silver h-[3.75rem]" />
              <div className="relative leading-[130%]">Selena</div>
            </div>
          </div>
        </div>
      </main>
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
      <nav
        className="m-0 absolute bottom-[0rem] left-[calc(50%_-_214px)] shadow-[0px_-10px_70px_rgba(255,_255,_255,_0.07)] rounded-t-none rounded-b-21xl bg-primary-black w-[26.75rem] h-[5.625rem] flex flex-row items-center justify-between p-[1.25rem] box-border"
        id="FooterNav"
      >
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] h-[2.875rem] flex flex-col items-center justify-between"
          id="NavHomeBtn"
        >
          <img
            className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
            alt=""
            src="/frame.svg"
          />
          <div className="relative text-[0.75rem] font-medium font-body-regular-16 text-transparent !bg-clip-text [background:linear-gradient(90deg,_#11998e,_#38ef7d)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] text-left">
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
      <div className="absolute top-[4.188rem] left-[-22rem] w-[2.25rem] h-[2.25rem] flex flex-row items-center justify-start">
        <img
          className="w-[2.5rem] relative h-[2.5rem]"
          alt=""
          src="/notice.svg"
        />
      </div>
      <div className="absolute top-[3.813rem] left-[21.5rem] w-[4rem] h-[0rem]" />
    </div>
  );
};

export default Home;
