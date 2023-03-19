import { useState } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { View, Form, Input, Label, Button } from "@tarojs/components";
import { AtImagePicker } from "taro-ui";
import "./index.scss";

function AddStudent() {
  const [name, setName] = useState("");
  const [files, setFiles] = useState([]);
  const router = useRouter();

  const handleSubmit = () => {
    const newStudent = { id: Date.now(), name };
    if (router.params.onAddStudent) {
      router.params.onAddStudent(newStudent);
    }
    Taro.navigateBack();
  };

  return (
    <View>
      <Form onSubmit={handleSubmit}>
        <Label>
          姓名：
          <Input value={name} onChange={e => setName(e.target.value)} />
        </Label>
        <View className="image-picker-container">
          <AtImagePicker
            files={files}
            onChange={(files, operationType, index) => {
              console.log(files, operationType, index);
              setFiles(files);
            }}
          />
        </View>
        <Button type="submit">添加学生</Button>
      </Form>
    </View>
  );
}

export default AddStudent;
