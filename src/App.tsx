import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store";
import { fetchDog } from "./service/userService";
import { Breed } from "./interfaceDataDog/interface";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dataDogs = useSelector((state: any) => state.dogs);
  const status = useSelector((state: any) => state.dogs.status);
  console.log(status);

  const fetchUsers = () => {
    dispatch(fetchDog());
  };
  useEffect(() => {
    dispatch(fetchDog());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        {status === "loading" && <p>Loading...</p>}
        <ul>
          {dataDogs.status === "succeeded" &&
            dataDogs?.Dog?.data.map((dog: Breed, index: number) => (
              <li key={index}>{dog.attributes.description}</li>
            ))}
        </ul>
        {status === "failed" && (
          <>
            <p>Đã có lỗi xảy ra!</p>
            <button onClick={fetchUsers}>Tải lại</button>
          </>
        )}
      </header>
    </div>
  );
};

export default App;
