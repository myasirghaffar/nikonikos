import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ArrowBackIcon } from "../assets/icons";
import { logo } from "../assets/logos";
import { ReusableInput } from "../components/Form";
import { setUser } from "../store/slices/authSlice";
import { getDashboardPathByRole } from "../utils/roles";

const adminUser = {
  email: "admin@example.com",
  password: "admin123",
  role: "admin",
  name: "Admin",
};

const Login = () => {
  const [error, setError] = useState(null);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (auth.isAuthenticated && auth.user?.role) {
      navigate(getDashboardPathByRole(auth.user.role), { replace: true });
    }
  }, [auth.isAuthenticated, auth.user, navigate]);

  const loginWithCredentials = (email, password) => {
    setError(null);
    const isValid =
      email.trim().toLowerCase() === adminUser.email &&
      password === adminUser.password;

    if (!isValid) {
      const message = "Incorrect admin email or password. Please try again.";
      setError(message);
      toast.error(message);
      return;
    }

    dispatch(
      setUser({
        role: adminUser.role,
        email: adminUser.email,
        name: adminUser.name,
      })
    );

    toast.success(`Welcome, ${adminUser.name}!`);
    navigate(getDashboardPathByRole(adminUser.role));
  };

  const onSubmit = ({ email, password }) => {
    loginWithCredentials(email, password);
  };

  const fillCredentials = (user) => {
    setValue("email", user.email, { shouldValidate: true, shouldDirty: true });
    setValue("password", user.password, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setError(null);
  };

  return (
    <div className="flex h-screen items-center justify-center overflow-auto bg-app-gradient px-4 py-4">
      <div className="mx-auto w-full max-w-[480px]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-gray-300"
        >
          <ArrowBackIcon className="h-3 w-3 text-gray-400" />
          Back to Home
        </Link>

        <div className="mt-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:p-6">
          <div className="flex flex-col items-center gap-1.5 text-center">
            <img
              src={logo}
              alt="Nikonikkos Home Improvement"
              className="h-12 w-auto object-contain"
            />
            <h1 className="text-2xl font-semibold leading-tight text-slate-900">
              Admin Sign In
            </h1>
            <p className="text-sm text-gray-500">
              Welcome back. Please enter your admin details.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-4">
            <ReusableInput
              label="Email"
              placeholder="Enter your email"
              border="border-gray-200"
              backgroundColor="bg-white"
              focusRing="focus:ring-red-600"
              inputClassName="!h-11 rounded-xl border text-sm text-slate-900 placeholder:text-gray-400"
              labelClassName="mb-1.5 text-sm font-medium text-slate-900"
              error={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />

            <ReusableInput
              type="password"
              label="Password"
              placeholder="Enter your password"
              border="border-gray-200"
              backgroundColor="bg-white"
              focusRing="focus:ring-red-600"
              inputClassName="!h-11 rounded-xl border text-sm text-slate-900 placeholder:text-gray-400"
              labelClassName="mb-1.5 text-sm font-medium text-slate-900"
              error={errors.password?.message}
              {...register("password", {
                required: "Password is required",
              })}
            />

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-red-600 transition hover:text-red-700"
              >
                Forgot password?
              </button>
            </div>

            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-2.5 text-xs text-red-700">
                {error}
              </div>
            )}

            <button
              disabled={auth.loading}
              type="submit"
              className="h-11 w-full rounded-xl bg-red-600 text-base font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {auth.loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-20 flex flex-col items-end gap-2">
        <span className="rounded-full bg-zinc-900/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white shadow-lg backdrop-blur-sm">
          Quick Fill
        </span>
        <div className="flex gap-2 rounded-full bg-white/90 p-2 shadow-xl backdrop-blur">
          <button
            type="button"
            onClick={() => fillCredentials(adminUser)}
            title={`${adminUser.name}: ${adminUser.email}`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-xs font-semibold uppercase text-white transition hover:bg-red-700"
          >
            AD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
