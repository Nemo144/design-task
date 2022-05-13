import React from "react";
import { images } from "../constants";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export const Home = () => {
  return (
    <div className="flex flex-col my-10 ">
      <div className="flex flex-col justify-start pb-5">
        <h1 className="text-white">Hello Jane</h1>
        <p className="text-zinc-500">
          How are you doing today? Would you like to share something with the
          <p className="text-zinc-500">community 🤗</p>
        </p>
      </div>

      <div className="flex flex-col box-content rounded-lg  border-2 w-full h-52 bg-zinc-800 border-zinc-700">
        <form>
          <label
            for="Create a post"
            className="text-white flex justify-start pl-6 pt-5"
          >
            Create a post
          </label>
          <div className="relative p-6 rounded-full pb-3 flex w-full justify-between">
            <input
              id="post"
              type="text"
              label="Create a post"
              placeholder="How are you feeling today?"
              className="w-full pl-14 border tracking-tight text-xs border-none h-16 bg-zinc-900  rounded "
            />

            <div className="absolute  my-6 pl-4 border-solid border-zinc-800">
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path d="M0 18.26H18V0.26H0V18.26Z" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use href="#image0_2_81" transform="scale(0.015625)" />
                  </pattern>
                  <image
                    id="image0_2_81"
                    width="64"
                    height="64"
                    href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </div>
          </div>
        </form>
        <div className="pr-6 flex justify-end items-center">
          <button className="bg-blue-500 w-28 h-10 border rounded border-none text-white">
            Post
          </button>
        </div>
      </div>

      <div className="flex flex-col box-content mt-2 rounded-lg  border-2 w-full h-56 bg-zinc-800 border-zinc-700">
        <form>
          <div className="relative p-6 pb-3 flex flex-col w-full justify-between">
            <div className="text-zinc-300 flex justify-between items-center mb-4">
              <div className="flex justify-start">
                <img
                  src={images.ellipse}
                  alt="avatar"
                  className="h-10 ml-0 blur-none rounded-full border-none"
                />
                <div className="pl-4">
                  <p>Theresa Webb</p>
                  <p className="text-zinc-500 text-xs tracking-tighter">
                    5mins ago
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <BiDotsHorizontalRounded />
              </div>
            </div>
            <input
              id="post"
              type="text"
              label="Create a post"
              // placeholder="How are you feeling today?"
              className="w-full pl-14 border border-none h-20 bg-zinc-900  rounded "
            />

            <div className="absolute my-20  border-transparent border-solid border-zinc-800 bg-transparent">
              <div className="flex pl-4">
                <p>👋</p>
                <div className="text-zinc-500 text-xs -my-1 mx-6 tracking-tighter">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                  <p>
                    Velit officia consequat duis enim velit mollit.
                    Excercitation veniam{" "}
                  </p>
                  <p>consequat sunt nostrud amet.</p>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="pr-6 mx-6 text-xs tracking-tighter text-zinc-500 -my-1 flex justify-start items-center">
          <div className="">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.3333 1.83333L2.66662 1.83336C1.8382 1.83336 1.16663 2.50493 1.16663 3.33336V11.3334C1.16663 12.1618 1.8382 12.8334 2.66662 12.8334H10C10.1326 12.8334 10.2598 12.886 10.3536 12.9798L13.5 16.1262V13.3334C13.5 13.0572 13.7238 12.8334 14 12.8334H17.3333C18.1617 12.8334 18.8333 12.1618 18.8333 11.3334V3.33333C18.8333 2.5049 18.1617 1.83333 17.3333 1.83333ZM2.66662 0.83336L17.3333 0.833328C18.714 0.833325 19.8333 1.95262 19.8333 3.33333V11.3334C19.8333 12.7141 18.714 13.8334 17.3333 13.8334H14.5V17.3333C14.5 17.5356 14.3781 17.7179 14.1913 17.7953C14.0045 17.8727 13.7894 17.8299 13.6464 17.6869L9.79289 13.8334H2.66662C1.28591 13.8334 0.166626 12.7141 0.166626 11.3334V3.33336C0.166626 1.95265 1.28591 0.833363 2.66662 0.83336Z"
                fill="#C5C7CA"
              />
            </svg>
          </div>
          <p className="pl-1">24 comments</p>
        </div>
      </div>

      <div className="flex flex-col box-content mt-2 rounded-lg  border-2 w-full h-56 bg-zinc-800 border-zinc-700">
        <form>
          <div className="relative p-6 pb-3 flex flex-col w-full justify-between">
            <div className="text-zinc-300 flex justify-between items-center mb-4">
              <div className="flex justify-start">
                <img
                  src={images.ellipse2}
                  alt="avatar"
                  className="h-10 ml-0 blur-none rounded-full border-none"
                />
                <div className="pl-4">
                  <p>Marvin Mckinney</p>
                  <p className="text-zinc-500 text-xs tracking-tighter">
                    8mins ago. Edited
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <BiDotsHorizontalRounded />
              </div>
            </div>
            <input
              id="post"
              type="text"
              label="Create a post"
              // placeholder="How are you feeling today?"
              className="w-full pl-14 border border-none h-20 bg-zinc-900  rounded "
            />

            <div className="absolute my-20  border-transparent border-solid border-zinc-800 bg-transparent">
              <div className="flex pl-4">
                <p>👋</p>
                <div className="text-zinc-500 text-xs -my-1 mx-6 tracking-tighter">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                  <p>
                    Velit officia consequat duis enim velit mollit.
                    Excercitation veniam{" "}
                  </p>
                  <p>consequat sunt nostrud amet.</p>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="pr-6 mx-6 text-xs tracking-tighter text-zinc-500 -my-1 flex justify-start items-center">
          <div className="">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.3333 1.83333L2.66662 1.83336C1.8382 1.83336 1.16663 2.50493 1.16663 3.33336V11.3334C1.16663 12.1618 1.8382 12.8334 2.66662 12.8334H10C10.1326 12.8334 10.2598 12.886 10.3536 12.9798L13.5 16.1262V13.3334C13.5 13.0572 13.7238 12.8334 14 12.8334H17.3333C18.1617 12.8334 18.8333 12.1618 18.8333 11.3334V3.33333C18.8333 2.5049 18.1617 1.83333 17.3333 1.83333ZM2.66662 0.83336L17.3333 0.833328C18.714 0.833325 19.8333 1.95262 19.8333 3.33333V11.3334C19.8333 12.7141 18.714 13.8334 17.3333 13.8334H14.5V17.3333C14.5 17.5356 14.3781 17.7179 14.1913 17.7953C14.0045 17.8727 13.7894 17.8299 13.6464 17.6869L9.79289 13.8334H2.66662C1.28591 13.8334 0.166626 12.7141 0.166626 11.3334V3.33336C0.166626 1.95265 1.28591 0.833363 2.66662 0.83336Z"
                fill="#C5C7CA"
              />
            </svg>
          </div>
          <p className="pl-1">24 comments</p>
        </div>
      </div>
    </div>
  );
};
