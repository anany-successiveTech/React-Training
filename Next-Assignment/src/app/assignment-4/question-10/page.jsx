'use client'
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  User,
  Phone,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const FormValidationChallenge = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [touched, setTouched] = useState({});

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        if (!value.trim()) return "First name is required";
        if (value.length < 2) return "First name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value))
          return "First name can only contain letters";
        return "";

      case "lastName":
        if (!value.trim()) return "Last name is required";
        if (value.length < 2) return "Last name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value))
          return "Last name can only contain letters";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";

      case "phone":
        if (!value.trim()) return "Phone number is required";
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phoneRegex.test(value))
          return "Please enter a valid phone number (e.g., 123-456-7890)";
        return "";

      case "password":
        if (!value) return "Password is required";
        if (value.length < 8) return "Password must be at least 8 characters";
        if (!/(?=.*[a-z])/.test(value))
          return "Password must contain at least one lowercase letter";
        if (!/(?=.*[A-Z])/.test(value))
          return "Password must contain at least one uppercase letter";
        if (!/(?=.*\d)/.test(value))
          return "Password must contain at least one number";
        if (!/(?=.*[@$!%*?&])/.test(value))
          return "Password must contain at least one special character";
        return "";

      case "confirmPassword":
        if (!value) return "Please confirm your password";
        if (value !== formData.password) return "Passwords do not match";
        return "";

      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }

    // Also validate confirm password if password changes
    if (
      name === "password" &&
      touched.confirmPassword &&
      formData.confirmPassword
    ) {
      const confirmError = validateField(
        "confirmPassword",
        formData.confirmPassword
      );
      setErrors((prev) => ({ ...prev, confirmPassword: confirmError }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitSuccess(false);

    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    // If no errors, simulate successful submission
    if (Object.keys(newErrors).length === 0) {
      setSubmitSuccess(true);
      // Reset form after success
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        });
        setTouched({});
        setSubmitSuccess(false);
      }, 3000);
    }
  };

  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/(?=.*[a-z])/.test(password)) strength++;
    if (/(?=.*[A-Z])/.test(password)) strength++;
    if (/(?=.*\d)/.test(password)) strength++;
    if (/(?=.*[@$!%*?&])/.test(password)) strength++;

    const levels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    const colors = ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e"];

    return {
      level: levels[strength],
      color: colors[strength],
      score: strength,
    };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const InputField = ({
    name,
    label,
    type = "text",
    icon: Icon,
    showToggle,
    onToggle,
    showPassword,
    placeholder,
  }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon
            className={`h-5 w-5 ${
              errors[name] ? "text-red-500" : "text-gray-400"
            }`}
          />
        </div>
        <input
          name={name}
          type={showToggle ? (showPassword ? "text" : "password") : type}
          value={formData[name]}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={`w-full pl-10 pr-${
            showToggle ? "12" : "4"
          } py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
            errors[name] && touched[name]
              ? "border-red-500 bg-red-50"
              : touched[name] && !errors[name]
              ? "border-green-500 bg-green-50"
              : "border-gray-300"
          }`}
        />
        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 text-gray-400" />
            ) : (
              <Eye className="h-5 w-5 text-gray-400" />
            )}
          </button>
        )}
        {touched[name] && !errors[name] && formData[name] && (
          <div className="absolute inset-y-0 right-3 flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500" />
          </div>
        )}
      </div>
      {errors[name] && touched[name] && (
        <div className="mt-1 flex items-center text-red-600 text-sm">
          <AlertCircle className="h-4 w-4 mr-1" />
          {errors[name]}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create Account
          </h1>
          <p className="text-gray-600">
            Complete the form below with proper validation
          </p>
        </div>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            Form submitted successfully! 🎉 All validations passed.
          </div>
        )}

        <div>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <InputField
                name="firstName"
                label="First Name"
                icon={User}
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <InputField
                name="lastName"
                label="Last Name"
                icon={User}
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Email Field */}
          <InputField
            name="email"
            label="Email Address"
            type="email"
            icon={Mail}
            placeholder="Enter your email address"
          />

          {/* Phone Field */}
          <div className="mb-4">
            <InputField
              name="phone"
              label="Phone Number"
              icon={Phone}
              placeholder="123-456-7890"
            />
            {!errors.phone && (
              <p className="mt-1 text-sm text-gray-500">Format: 123-456-7890</p>
            )}
          </div>

          {/* Password Field */}
          <InputField
            name="password"
            label="Password"
            icon={User}
            showToggle={true}
            showPassword={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
            placeholder="Create a strong password"
          />

          {/* Password Strength Indicator */}
          {formData.password && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-gray-600">
                  Password Strength:
                </span>
                <span
                  className="text-sm font-medium"
                  style={{ color: passwordStrength.color }}
                >
                  {passwordStrength.level}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${(passwordStrength.score / 5) * 100}%`,
                    backgroundColor: passwordStrength.color,
                  }}
                />
              </div>
            </div>
          )}

          {/* Confirm Password Field */}
          <InputField
            name="confirmPassword"
            label="Confirm Password"
            icon={User}
            showToggle={true}
            showPassword={showConfirmPassword}
            onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
            placeholder="Confirm your password"
          />

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormValidationChallenge;
