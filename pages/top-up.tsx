import type { NextPage } from "next";
import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const TopUp: NextPage = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/transfer-completed");
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
      <div className="absolute top-[3.813rem] left-[calc(50%_-_35px)] text-[1.25rem] font-medium">
        Top Up
      </div>
      <section
        className="absolute top-[7.125rem] left-[1.25rem] w-[24.25rem] flex flex-col items-center justify-start gap-[1.5rem] text-left text-[0.875rem] text-tb font-body-regular-16"
        id="TopUpSection"
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.187rem] text-label-color-dark-primary">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative leading-[150%]">Destination transfer</div>
            <Dropdown
              className="self-stretch"
              overlay={
                <Menu>
                  {(
                    [
                      { value: "Own Account" },
                      { value: "Beneficiary" },
                      { value: "Wallet" },
                    ] as any
                  ).map((option: any, index: number) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["hover"]}
            >
              <Button onClick={(e) => e.preventDefault()}>
                {`Manga Love `}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative leading-[150%]">ID account</div>
            <div className="self-stretch rounded-xl bg-gray-100 h-[3.375rem] flex flex-row items-center justify-between py-[0.5rem] px-[1rem] box-border">
              <input
                className="[border:none] [outline:none] font-body-regular-16 text-[0.875rem] bg-[transparent] relative leading-[130%] text-label-color-dark-primary text-left"
                name="TopupAccountID"
                placeholder="3225-4385"
                type="text"
              />
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/check.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative leading-[150%]">
              How much do you wan to top up?
            </div>
            <div className="self-stretch rounded-xl bg-gray-100 h-[3.375rem] flex flex-row items-center justify-between py-[0.5rem] px-[1rem] box-border">
              <input
                className="[border:none] [outline:none] font-body-regular-16 text-[0.875rem] bg-[transparent] relative leading-[130%] text-label-color-dark-primary text-left"
                name="TopupAmount"
                placeholder="$ 5.00"
                type="number"
              />
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/check.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="relative leading-[150%]">Other nominal</div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[1.062rem]">
              <button
                className="cursor-pointer [border:none] py-[0.5rem] px-[1rem] bg-gray-100 flex-1 rounded-md h-[3rem] flex flex-row items-center justify-center box-border"
                id="Quick5Input"
              >
                <div className="relative text-[0.875rem] leading-[130%] font-body-regular-16 text-label-color-dark-primary text-left">
                  $ 5.00
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] py-[0.5rem] px-[1rem] bg-gray-100 flex-1 rounded-md h-[3rem] flex flex-row items-center justify-center box-border"
                id="Quick10Input"
              >
                <div className="relative text-[0.875rem] leading-[130%] font-body-regular-16 text-label-color-dark-primary text-left">
                  $ 10.00
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] py-[0.5rem] px-[1rem] bg-gray-100 flex-1 rounded-md h-[3rem] flex flex-row items-center justify-center box-border"
                id="Quick15Input"
              >
                <div className="relative text-[0.875rem] leading-[130%] font-body-regular-16 text-label-color-dark-primary text-left">
                  $ 15.00
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[1rem]">
              <button
                className="cursor-pointer [border:none] py-[0.5rem] px-[1rem] bg-gray-100 flex-1 rounded-md h-[3rem] flex flex-row items-center justify-center box-border"
                id="Quick20Input"
              >
                <div className="relative text-[0.875rem] leading-[130%] font-body-regular-16 text-label-color-dark-primary text-left">
                  $ 20.00
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] py-[0.5rem] px-[1rem] bg-gray-100 flex-1 rounded-md h-[3rem] flex flex-row items-center justify-center box-border"
                id="Quick25Input"
              >
                <div className="relative text-[0.875rem] leading-[130%] font-body-regular-16 text-label-color-dark-primary text-left">
                  $ 25.00
                </div>
              </button>
              <button
                className="cursor-pointer [border:none] py-[0.5rem] px-[1rem] bg-gray-100 flex-1 rounded-md h-[3rem] flex flex-row items-center justify-center box-border"
                id="Quick30Input"
              >
                <div className="relative text-[0.875rem] leading-[130%] font-body-regular-16 text-label-color-dark-primary text-left">
                  $ 30.00
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          className="self-stretch flex flex-col items-center justify-start gap-[1.5rem] cursor-pointer text-[0.75rem]"
          onClick={onFrameContainerClick}
        >
          <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
            <input
              className="m-0 w-[1.25rem] relative h-[1.25rem] overflow-hidden shrink-0"
              id="PolicyBtn"
              type="checkbox"
            />
            <div className="flex-1 relative leading-[130%]">
              <span>
                Top transaction policies and conditions You may read about it
              </span>
              <span className="text-label-color-dark-primary">{` `}</span>
              <span className="text-springgreen">here.</span>
            </div>
          </div>
          <button
            className="cursor-pointer [border:none] py-[0.25rem] px-[1.25rem] bg-[transparent] self-stretch rounded-xl [background:linear-gradient(90deg,_#11998e,_#38ef7d)] h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border"
            id="TopupBtn"
          >
            <div className="relative text-[1rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-center">
              Top Up
            </div>
          </button>
        </div>
      </section>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[3.875rem] left-[1.25rem] w-[1.75rem] h-[1.75rem] overflow-hidden"
        id="BackBtn"
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

export default TopUp;
