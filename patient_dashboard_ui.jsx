import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FilePlus, UploadCloud } from "lucide-react";
import { motion } from "framer-motion";

const PatientDashboard = () => {
  const [patientName, setPatientName] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    setFiles([...files, ...event.target.files]);
  };

  return (
    <motion.div
      className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-3xl font-bold text-blue-700 text-center mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        Patient Dashboard
      </motion.h1>
      
      <motion.div
        className="max-w-xl mx-auto bg-white p-6 shadow-xl rounded-2xl mb-6"
        whileHover={{ scale: 1.05 }}
      >
        <label className="block text-lg font-semibold text-blue-600 mb-2">
          Patient Name
        </label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter patient name"
        />
      </motion.div>

      <motion.div
        className="max-w-xl mx-auto bg-white p-6 shadow-xl rounded-2xl"
        whileHover={{ scale: 1.05 }}
      >
        <label className="block text-lg font-semibold text-blue-600 mb-4">
          Upload Files (Prescriptions, X-rays, Reports)
        </label>
        <div className="flex items-center gap-4 mb-4">
          <Button className="flex items-center gap-2 bg-blue-500 text-white hover:bg-blue-600">
            <UploadCloud />
            Select Files
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="absolute opacity-0 inset-0 cursor-pointer"
            />
          </Button>
        </div>
        {files.length > 0 && (
          <div className="mt-4">
            <h3 className="text-blue-700 font-medium">Uploaded Files:</h3>
            <ul className="list-disc pl-5">
              {files.map((file, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="text-gray-600"
                >
                  {file.name}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>

      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold p-4 rounded-lg">
          Save Patient Details
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default PatientDashboard;
