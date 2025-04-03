import React, { useState } from "react";
import { motion } from "framer-motion";


export default function EnrollForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    ageProof: null,
    addressProof: null,
    photos: null,
    licenseType: "",
    education: "",
    startDate: "",
    endDate: "",
    paymentMethod: "",
    instructor: "",
    car: "",
    signature: null, // For signature
    photo: null, // For photo
    course:"",
  });
  const [endDate, setEndDate] = useState('');

  const [errors, setErrors] = useState({} as Record<string, string>);

  const [paymentSuccess, setPaymentSuccess] = useState(false); // Track payment status

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
 if (e.target.name=="startDate"){
let n=10;
/*
const getStatusMessage = () =>{
switch(){
  case 
}}*/


  formData.endDate=calculateEndDate(e.target.value,n);
  console.log (formData.endDate);

 }


    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value,});
    console.log();

    
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.files?.[0] || null });
  };


  

  // Function to add days to the start date
  const calculateEndDate = (start :any, days :any) => {
    if (start && days) {
      const startDateObj = new Date(start);
      startDateObj.setDate(startDateObj.getDate() + parseInt(days));
      const formattedEndDate = startDateObj.toISOString().split('T')[0];
      return formattedEndDate;
    } else {
       return '';
    }
  };

  


  const validateForm = () => {
    let newErrors: Record<string, string> = {};
    
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.gender) newErrors.gender = "Please select gender.";
    if (!formData.phone.match(/^\d{10}$/)) newErrors.phone = "Enter a valid 10-digit phone number.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.ageProof) newErrors.ageProof = "Please upload age proof.";
    if (!formData.addressProof) newErrors.addressProof = "Please upload address proof.";
    if (!formData.photos) newErrors.photos = "Please upload 3 passport-size photos.";
    if (!formData.licenseType) newErrors.licenseType = "Select a license type.";
    if (formData.licenseType.includes("Transport") && !formData.education) 
      newErrors.education = "Transport license requires minimum 8th pass.";
    if (!formData.startDate) newErrors.startDate = "Select a start date.";
    if (!formData.instructor) newErrors.instructor = "Select an instructor.";
    if (!formData.car) newErrors.car = "Select a car.";
    if (!formData.paymentMethod) newErrors.paymentMethod = "Select a payment method.";
    if (!formData.signature) newErrors.signature = "Please upload your signature.";
    if (!formData.photo) newErrors.photo = "Please upload a photo.";
    if (!formData.course) newErrors.course = "Select a course.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  console.log(formData);
    const form = new FormData();
    console.log(form);
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        form.append(key, value);
      }
    });
  
    try {
      const response = await fetch("http://localhost:8080/demo/Enroll", {
        method: "POST",
        body: form,
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Server Response:", result);
        alert("Enrollment successful!");
      } else {
        alert(`Failed to submit form: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to submit form.");
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log(formData);
    
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          form.append(key, value);
        }
      });
    
      try {
        const response = await fetch("http://localhost:8080/demo/Enroll", {
          method: "POST",
          body: form,
        });
    
        if (response.ok) {
          const result = await response.json();
          console.log("Server Response:", result);
          alert("Enrollment successful!");
    
          // Enable "Book Now" button if payment is UPI or Card
          if (formData.paymentMethod === "UPI" || formData.paymentMethod === "Card") {
            setPaymentSuccess(true);
          }
        } else {
          alert(`Failed to submit form: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Submission Error:", error);
        alert("Failed to submit form.");
      }
    };
    
  };
  

  



     
    






  
  return (
    
    <div className="min-h-screen bg-white flex justify-center items-center p-6 py-24">
  {/* Enrollment Form without a container */}
  <div className="bg-white w-full lg:w-4/5 xl:w-3/4 2xl:w-2/3 p-8 shadow-lg border border-whitespace-y-8">
    
    {/* Title and Separator Line */}
    <div className="mb-10 text-left">
      <h2 className="text-2xl font-bold leading-tight mb-18 font-serif">Enrollment Form</h2>
      <hr className="my-6 border-t-2 border-[#1f3044]" />
    </div>

    {/* Enrollment Form */}
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* Full Name and Photo */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="block font-medium text-[#1f3044]">Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            className="w-full p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition" 
          />
          <small className="block text-gray-600 mt-1">First - Middle - Last</small>
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block font-medium text-[#1f3044]">Upload Photo</label>
          <input 
            type="file" 
            name="photo" 
            onChange={handleFileChange} 
            className="w-full p-3 border border-[#1f3044] rounded-md" 
          />
          {errors.photo && <p className="text-red-500 text-sm">{errors.photo}</p>}
        </div>
      </div>

      {/* Date of Birth and Gender */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="block font-medium text-[#1f3044]">Date of Birth</label>
          <input 
            type="date" 
            name="dob" 
            value={formData.dob} 
            onChange={handleChange} 
            className="w-full p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition" 
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>
        <div>
          <label className="block font-medium text-[#1f3044]">Gender</label>
          <select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            className="w-full p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block font-medium text-[#1f3044]">Phone Number</label>
        <input 
          type="tel" 
          name="phoneNumber" 
          onChange={handleChange} 
          className="w-1/2 p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition" 
        />
        {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
      </div>

      {/* Select Course and License Type */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="block font-medium text-[#1f3044]">Select Course</label>
          <select 
            name="course" 
            value={formData.course} 
            onChange={handleChange} 
            className="w-full p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          >
            <option value="">Select Course</option>
            <option value="WAGON R">WAGON R</option>
            <option value="SWIFT">SWIFT</option>
            <option value="HONDA CITY">HONDA CITY</option>
            {/* Add other options as needed */}
          </select>
        </div>
        <div>
          <label className="block font-medium text-[#1f3044]">License Type</label>
          <select 
            name="licenseType" 
            value={formData.licenseType} 
            onChange={handleChange} 
            className="w-full p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          >
            <option value="">Select License Type</option>
            <option value="LMV Non-Transport">LMV Non-Transport</option>
            <option value="LMV Transport">LMV Transport</option>
          </select>
        </div>
      </div>

      {/* Upload Age Proof and Signature */}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="block font-medium text-[#1f3044]">Upload Age Proof</label>
          <input 
            type="file" 
            name="ageProof" 
            onChange={handleFileChange} 
            className="w-full p-3 border border-[#1f3044] rounded-md" 
          />
          {errors.ageProof && <p className="text-red-500 text-sm">{errors.ageProof}</p>}
        </div>
        <div>
          <label className="block font-medium text-[#1f3044]">Upload Signature</label>
          <input 
            type="file" 
            name="signature" 
            onChange={handleFileChange} 
            className="w-full p-3 border border-[#1f3044] rounded-md" 
          />
          {errors.signature && <p className="text-red-500 text-sm">{errors.signature}</p>}
        </div>
      </div>

      {/* Payment Option */}
      <div className="mb-4">
        <label className="block font-medium text-[#1f3044]">Select Payment Method</label>
        <select 
          name="paymentMethod" 
          value={formData.paymentMethod} 
          onChange={handleChange} 
          className="w-1/2 p-3 border border-[#1f3044] rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
        >
          <option value="">Choose Payment Method</option>
          <option value="UPI">UPI</option>
          <option value="Card">Debit/Credit Card</option>
          <option value="Cash">Pay at the office</option>
        </select>
        {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}
      </div>


  <h2 className="text-xl font-bold leading-tight font-serif text-left text-[#001730] mb-6">
  BOOK AND SCHEDULE NOW
</h2>
<hr className="my-6 border-t-2 border-[#1f3044]" />

{/* Start Date and End Date - Side by Side */}
<div className="grid grid-cols-2 gap-4 mb-6">
  {/* Start Date */}
  <div>
    <label className="block text-lg font-semibold text-[#1f3044] mb-2">
      Start Date
    </label>
    <input
      type="date"
      name="startDate"
      value={formData.startDate}
      onChange={handleChange}
      className="w-full p-3 rounded-lg border border-[#1f3044] shadow-md bg-white
                 focus:outline-none focus:ring-4 focus:ring-[#F2BFA4] transition-all duration-300
                 hover:bg-[#F5E7DE] hover:border-[#F2BFA4] cursor-pointer"
    />
    {errors.startDate && (
      <motion.p
        className="text-red-600 text-sm font-medium mt-2"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {errors.startDate}
      </motion.p>
    )}
  </div>

  {/* End Date */}
  <div>
    <label className="block text-lg font-semibold text-[#1f3044] mb-2">End Date</label>
    <input
      type="date"
      name="endDate"
      value={formData.endDate}
      readOnly
      className="w-full p-3 rounded-lg border border-[#1f3044] shadow-md bg-gray-100
                 focus:ring-2 focus:ring-blue-500 outline-none transition"
    />
    {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
  </div>
</div>

{/* Choose Instructor and Car - Side by Side */}
<div className="grid grid-cols-2 gap-4 mb-6">
  {/* Choose Instructor */}
  <div>
    <label className="block text-lg font-semibold text-[#1f3044] mb-2">Choose Instructor</label>
    <select
      name="instructor"
      value={formData.instructor}
      onChange={handleChange}
      className="w-full p-3 rounded-lg border border-[#1f3044] shadow-md bg-white
                 focus:ring-2 focus:ring-blue-500 outline-none transition"
    >
      <option value="">Select an Instructor</option>
      <option value="Instructor A">Instructor A</option>
      <option value="Instructor B">Instructor B</option>
    </select>
    {errors.instructor && <p className="text-red-500 text-sm">{errors.instructor}</p>}
  </div>

  {/* Choose Car */}
  <div>
    <label className="block text-lg font-semibold text-[#1f3044] mb-2">Choose Car</label>
    <select
      name="car"
      value={formData.car}
      onChange={handleChange}
      className="w-full p-3 rounded-lg border border-[#1f3044] shadow-md bg-white
                 focus:ring-2 focus:ring-blue-500 outline-none transition"
    >
      <option value="">Select a Car</option>
      <option value="Car A">Car A</option>
      <option value="Car B">Car B</option>
    </select>
    {errors.car && <p className="text-red-500 text-sm">{errors.car}</p>}
  </div>
</div>

{/* Submit Button */}
<button
  type="submit"
  className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 transition"
>
  Submit Application
</button>

      </form>
    </div>
  </div>
  );
} 