import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { onValue, ref, update } from "firebase/database";
import { db, auth } from "../../firebase";

const Manado = () => {
  let [status, setStatus] = useState("Approved")
  const klik = () => {
    setStatus("Done");
    update(ref(db, `users/Manado/${auth.currentUser.uid}`), {
      approval: "true",
    });
  }

  const [data, setData] = useState({
    tableData: [],
  });

  const getValues = () => {
    let dbRef = ref(db, "users/Manado");
    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let keyName = childSnapshot.key;
        let isData = childSnapshot.val();
        records.push({ key: keyName, data: isData });
      });
      setData({ tableData: records });
    });
  };

  useEffect(() => {
    getValues();
  }, []);
    

  return (
    <>
      <Navbar />
      <div>
        <div className="flex relative justify-center px-2 pt-40 sm:pt-40 text-black">
          <div className="bg-white rounded-xl shadow-2xl shadow-black-200 w-[1242px]">
            <div className="text-center">
              <h1 className="font-bold text-2xl my-6 uppercase">Manado</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex relative justify-center px-2 pt-20">
        <table className="bg-white rounded-xl shadow-2xl w-[1242px]">
          <thead className="text-black">
            <tr className="text-gray-100">
              <th className="py-3 bg-blue-500 text-2xl border-r-2 border-gray-300 rounded-tl-lg">No</th>
              <th className="py-3 bg-blue-500 text-2xl">Foto</th>
              <th className="py-3 bg-blue-500 text-2xl">Nama</th>
              <th className="py-3 bg-blue-500 text-2xl">No. WA</th>
              <th className="py-3 bg-blue-500 text-2xl">Medsos</th>
              <th className="py-3 bg-blue-500 text-2xl">Lokasi Event</th>
              <th className="py-3 bg-blue-500 text-2xl">Pembayaran</th>
            </tr>
          </thead>
          <tbody className="text-black text-center">
            {data.tableData.map((item, index) => {
              return (
                <tr key={item} className="bg-white cursor-pointer border-b-2 border-gray-300">
                  <td className="py-3 px-6 border-r-2">{index + 1}</td>
                  <td className="py-3 px-6">
                    <img className="w-[50px] h-[50px] mx-auto rounded-full hover:scale-150" src={item.data.foto} alt="/" />
                  </td>
                  <td className="py-3 px-6">{item.data.nama}</td>
                  <td className="py-3 px-6">{item.data.noWA}</td>
                  <td className="py-3 px-6">{item.data.sosmed}</td>
                  <td className="py-3 px-6">{item.data.lokasi}</td>
                  <td className="py-3 px-6">
                    <button onClick={klik} className="bg-green-400 hover:bg-green-200 px-2 py-2 mr-3 rounded-xl font-semibold uppercase">{status}</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mb-[90px]"></div>
    </>
  );
};

export default Manado;
