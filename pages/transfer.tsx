import type { NextPage } from "next";
import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const Transfer: NextPage = () => {
  const router = useRouter();

  const onLogInClick = useCallback(() => {
    router.push("/transfer-completed");
  }, [router]);

  const onFrameClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="w-full relative rounded-21xl bg-primary-black h-[65rem] overflow-hidden text-center text-[1.063rem] text-label-color-dark-primary font-body-regular-16">
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
      <div className="absolute top-[3.813rem] left-[calc(50%_-_41px)] text-[1.25rem] font-medium">
        Transfer
      </div>
      <main
        className="absolute top-[7.188rem] left-[1.25rem] w-[24.25rem] flex flex-col items-center justify-start gap-[1.5rem] text-left text-[0.875rem] text-label-color-dark-primary font-body-regular-16"
        id="TransferSection"
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.187rem]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative leading-[150%]">Number bank</div>
            <div className="self-stretch rounded-xl bg-gray-100 h-[3.375rem] flex flex-row items-center justify-between py-[0.5rem] px-[1rem] box-border">
              <input
                className="[border:none] [outline:none] font-body-regular-16 text-[0.875rem] bg-[transparent] relative leading-[130%] text-label-color-dark-primary text-left"
                name="BankNumberInput"
                placeholder="8247-3874-2387-0123"
                type="number"
              />
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/check.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative leading-[150%]">Choose bank</div>
            <Dropdown
              className="self-stretch"
              overlay={
                <Menu>
                  {(
                    [
                      { value: "Digital Bank" },
                      { value: "Online Bank" },
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
                {`Digital Bank `}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="self-stretch relative leading-[130%]">Message</div>
            <textarea
              className="[border:none] bg-gray-100 font-body-regular-16 text-[0.875rem] [outline:none] self-stretch rounded-xl h-[8.5rem] flex flex-row items-start justify-start p-[1rem] box-border text-label-color-dark-primary"
              placeholder="Type message here..."
            />
          </div>
        </div>
        <div className="w-[11.875rem] flex flex-col items-center justify-start gap-[1rem] text-center text-tb">
          <div className="self-stretch relative leading-[130%]">
            Enter your amount
          </div>
          <input
            className="[border:none] [outline:none] font-body-regular-16 text-[2.25rem] bg-[transparent] self-stretch relative leading-[130%] text-label-color-dark-primary text-left"
            name="AmountTotal"
            placeholder="$24,734.00"
            type="number"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[1.25rem] text-[2rem]">
          <div className="self-stretch h-[4.375rem] flex flex-row items-center justify-center gap-[1rem]">
            <div className="flex-1 rounded-189xl bg-t1 h-[4.5rem] flex flex-col items-center justify-center p-[0.5rem] box-border">
              <div className="relative leading-[130%]">1</div>
            </div>
            <div className="flex-1 rounded-189xl bg-t1 h-[4.5rem] flex flex-col items-center justify-center p-[0.5rem] box-border">
              <div className="relative leading-[130%]">2</div>
            </div>
            <div className="flex-1 rounded-189xl bg-t1 h-[4.5rem] flex flex-col items-center justify-center p-[0.5rem] box-border">
              <div className="relative leading-[130%]">3</div>
            </div>
          </div>
          <div className="self-stretch h-[4.375rem] flex flex-row items-center justify-center gap-[1rem]">
            <div className="flex-1 rounded-189xl bg-t1 h-[4.5rem] flex flex-col items-center justify-center p-[0.5rem] box-border">
              <div className="relative leading-[130%]">4</div>
            </div>
            <div className="flex-1 rounded-189xl bg-t1 h-[4.5rem] flex flex-col items-center justify-center p-[0.5rem] box-border">
              <div className="relative leading-[130%]">5</div>
            </div>
            <div className="flex-1 rounded-189xl bg-t1 h-[4.5rem] flex flex-col items-center justify-center p-[0.5rem] box-border">
              <div className="relative leading-[130%]">6</div>
            </div>
          </div>
          <div className="self-stretch h-[4.375rem] flex flex-row items-center justify-center gap-[1rem]">
            <div className="flex-1 rounded-189xl bg-t1 h-[4.5rem] flex flex-col items-center justify-center p-[0.5rem] box-border">
              <div className="relative leading-[130%]">7</div>
            </div>
            <div className="flex-1 rounded-189xl bg-t1 h-[4.5rem] flex flex-col items-center justify-center p-[0.5rem] box-border">
              <div className="relative leading-[130%]">8</div>
            </div>
            <div className="flex-1 rounded-189xl bg-t1 h-[4.5rem] flex flex-col items-center justify-center p-[0.5rem] box-border">
              <div className="relative leading-[130%]">9</div>
            </div>
          </div>
          <div className="self-stretch h-[4.375rem] flex flex-row items-center justify-center gap-[1rem]">
            <div className="flex-1 rounded-189xl bg-t1 h-[4.5rem] flex flex-col items-center justify-center p-[0.5rem] box-border">
              <div className="relative leading-[130%]">.</div>
            </div>
            <div className="flex-1 rounded-189xl bg-t1 h-[4.5rem] flex flex-col items-center justify-center p-[0.5rem] box-border">
              <div className="relative leading-[130%]">0</div>
            </div>
            <div className="flex-1 rounded-189xl bg-t1 h-[4.5rem] flex flex-col items-center justify-center p-[0.5rem] box-border">
              <img
                className="w-[1.5rem] relative h-[1.5rem] overflow-hidden shrink-0"
                alt=""
                src="/delete.svg"
              />
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] py-[0.25rem] px-[1.25rem] bg-[transparent] self-stretch rounded-xl [background:linear-gradient(90deg,_#11998e,_#38ef7d)] h-[3rem] overflow-hidden shrink-0 flex flex-row items-center justify-center box-border"
          id="TransferNowBtn"
          onClick={onLogInClick}
        >
          <div className="relative text-[1rem] leading-[1.5rem] font-medium font-body-regular-16 text-label-color-dark-primary text-center">
            Transfer
          </div>
        </button>
      </main>
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
    </div>
  );
};

export default Transfer;
