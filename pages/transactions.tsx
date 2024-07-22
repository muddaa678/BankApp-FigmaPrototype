import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Transactions: NextPage = () => {
  const router = useRouter();

  const onFrameClick = useCallback(() => {
    router.push("/home");
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
      <div className="absolute top-[3.813rem] left-[calc(50%_-_65px)] text-[1.25rem] font-medium">
        Transactions
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[3.875rem] left-[1.25rem] w-[1.75rem] h-[1.75rem] overflow-hidden"
        id="BackBtn"
        onClick={onFrameClick}
      >
        <img
          className="absolute h-[68.93%] w-[37.5%] top-[15.71%] right-[34.29%] bottom-[15.36%] left-[28.21%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
      </button>
      <main
        className="absolute top-[7.125rem] left-[calc(50%_-_195px)] w-[24.406rem] flex flex-col items-start justify-start gap-[1.5rem] text-left text-[0.875rem] text-label-color-dark-primary font-body-regular-16"
        id="FullTransactionHistorySection"
      >
        <div className="self-stretch flex flex-row items-start justify-between text-[1rem]">
          <div className="relative font-medium">Transaction History</div>
          <div className="h-[1.563rem] flex flex-row items-center justify-start gap-[0.25rem] text-[0.875rem] text-tb">
            <div className="relative">Monthly</div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[0.938rem] relative h-[0.938rem]"
              id="FullTransactionHistoryFilterBtn"
            >
              <img
                className="absolute h-2/5 w-4/5 top-[30%] right-[10%] bottom-[30%] left-[10%] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/vector3.svg"
              />
            </button>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
          <div className="relative text-[0.75rem]">Today</div>
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
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
          <div className="relative text-[0.75rem]">Yesterday</div>
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
      </main>
    </div>
  );
};

export default Transactions;
