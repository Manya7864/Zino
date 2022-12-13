import React, { useState } from "react";
import { red } from "../src/data";
import { blue } from "../src/data";
import { green } from "../src/data";
import { black } from "../src/data";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react'

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [data1, setData1] = useState(red);
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [data2, setData2] = useState(blue);
  const [data3, setData3] = useState(green);
  const [data4, setData4] = useState(black);
  const [title,setTitle]=useState("")
  const deletedata=(id)=>{
    let d1=data1.filter((el1)=>{
        return  el1.id!==id
    })
    setData1(d1)

  }
  const deletedata1=(id)=>{
    let d1=data2.filter((el1)=>{
        return  el1.id!==id
    })
    setData2(d1)

  }
  const deletedata2=(id)=>{
    let d1=data3.filter((el1)=>{
        return  el1.id!==id
    })
    setData3(d1)

  }
  const deletedata3=(id)=>{
    let d1=data4.filter((el1)=>{
        return  el1.id!==id
    })
    setData4(d1)

  }
  const handlesave=()=>{
    setData1([...data1,{id:Date.now(),title:title}])
    onClose()
  }
  return (
    <div style={{ display: "flex" }}>
      <div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height:"40px",width:"100px",
            marginLeft:"150px"

            }}
          >
            <h1>Red</h1>
            <Button onClick={onOpen}>Add</Button>
            
          </div>
          {data1.map((el, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    height: "90px",
                    width: "150px",
                    border: "1pxsolid red",
                    backgroundColor: "#ff9899",
                    marginLeft: "130px",
                  }}
                >
                  <h3>{el.title}</h3>
                  <button onClick={()=>deletedata(el.id)}>X</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height:"40px",width:"100px",
             marginLeft:"150px"
            }}
          >
            <h3>Blue</h3>
            <Button onClick={onOpen}>Add</Button>
          </div>
          {data2.map((el, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    height: "90px",
                    width: "150px",
                    border: "1pxsolid red",
                    backgroundColor: "#66b2fe",
                    marginLeft: "130px",
                  }}
                >
                  <h3>{el.title}</h3>
                  <button onClick={()=>deletedata1(el.id)}>X</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height:"40px",width:"100px",
              marginLeft:"150px"
            }}
          >
            <h3>Green</h3>
            <Button onClick={onOpen}>Add</Button>
          </div>
          {data3.map((el, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    height: "90px",
                    width: "150px",
                    border: "1pxsolid red",
                    backgroundColor: "#98fe9a",
                    marginLeft: "130px",
                  }}
                >
                  <h3>{el.title}</h3>
                  <button onClick={()=>deletedata2(el.id)}>X</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height:"40px",width:"100px",
              marginLeft:"150px"
            }}
          >
            <h3>Black</h3>
            <Button onClick={onOpen}>Add</Button>
          </div>
          {data4.map((el, ) => {
            return (
              <div key={el.id} style={ {display:"flex",justifyContent:"space-between"}}>
                <div 
                  style={{
                    height: "90px",
                    width: "150px",
                    border: "1pxsolid red",
                    backgroundColor: "#b3b3b3",
                    marginLeft: "130px",
                    
                  }}
                >
                  <h3>{el.title}</h3>
                  <button onClick={()=>deletedata3(el.id)}>X</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder='Title' onChange={(e)=>setTitle(e.target.value)} />
            </FormControl>

            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handlesave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Home;
