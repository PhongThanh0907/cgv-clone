"use client";

import Button from "@/components/Button";
import {
  AuthFormInputs,
  loginSchema,
  registerSchema,
} from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AccountPage = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>({
    resolver: zodResolver(isRegister ? registerSchema : loginSchema),
  });

  const onSubmit = (data: AuthFormInputs) => {
    console.log(data);
    // Xử lý đăng nhập ở đây
  };

  return (
    <div className="default-screen flex pt-8 pb-14">
      <div className="pr-4 border-r border-gray-300">
        <div className="bg-red-600 h-12 w-[528px] grid grid-cols-2 items-center relative">
          <span
            onClick={() => setIsRegister(false)}
            className="uppercase text-white font-bold relative top-0.5 text-center cursor-pointer"
          >
            Đăng nhập
          </span>
          <span
            onClick={() => setIsRegister(true)}
            className="uppercase text-white font-bold relative top-0.5 text-center cursor-pointer"
          >
            Đăng ký
          </span>

          <div
            className={`h-[2px] w-40 bg-white absolute bottom-0 duration-300 ${
              !isRegister ? "left-[50px]" : "left-[318px]"
            }`}
          />
        </div>

        <div className="bg-[#fdfcf0]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#fdfcf0] p-6 rounded shadow-md w-[528px]"
          >
            {isRegister && (
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tên
                </label>
                <input
                  id="name"
                  type="string"
                  placeholder="Tên"
                  {...register("name")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name?.message}
                  </p>
                )}
              </div>
            )}
            {isRegister && (
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  type="string"
                  placeholder="Số điện thoại"
                  {...register("phone")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone?.message}
                  </p>
                )}
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                {...register("email")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mật khẩu
              </label>
              <input
                id="password"
                placeholder="Mật khẩu"
                type="password"
                {...register("password")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>
            {isRegister && (
              <div className="flex items-center">
                <input type="checkbox" />
                <span className="text-sm font-bold ml-1">Tôi đồng ý với</span>
                <span className="text-sm ml-1 font-bold text-red-600">
                  Điều Khoản Sử Dụng Của CGV
                </span>
              </div>
            )}

            <Button type="submit" className="mt-2">
              {isRegister ? "Đăng ký" : "Đăng nhập"}
            </Button>

            <p className="text-blue-500 leading-[120%] text-xs text-center pt-3 cursor-pointer underline hover:text-blue-400 duration-300 active:text-blue-300">
              Bạn muốn tìm lại mật khẩu?
            </p>
          </form>
        </div>
      </div>

      <div>
        <Image
          src="/3.jpg"
          alt="account"
          className="w-[528px] h-[528px] object-cover"
          width={528}
          height={528}
        />
      </div>
    </div>
  );
};

export default AccountPage;
