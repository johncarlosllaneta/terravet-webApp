import React from "react";
import { useState, useEffect, useRef } from "react";
import { Col, Button, Modal, Row, Form, OverlayTrigger, Popover, Image } from "react-bootstrap";
import Axios from 'axios';
import { AiOutlineDelete, AiOutlineSearch, AiOutlineUpload } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import MaterialTable from 'material-table';
import { hostUrl } from "../../Components/Host";
const PharmacyTab = (props) => {
  //Insert
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
  };

  const [updateMedicineName, setUpdateMedicineName] = useState("");
  const [updateMedicineDescription, setUpdateMedicineDescription] = useState("");
  const [updateMedicineQuantity, setUpdateMedicineQuantity] = useState("");
  const [updateMedicinePrice, setUpdateMedicinePrice] = useState();
  const [pharmacy, setpharmacy] = useState([]);
  useEffect(() => {

    Axios.get(`${hostUrl}/pharmacy/${props.data.vet_admin_id}`).then((response) => {
      setpharmacy(response.data);
    });
  }, [pharmacy]);


  const [imageUrl, setimageUrl] = useState();
  const [preview, setPreview] = useState();
  const inputFile = useRef(null);
  const onClickProfile = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  useEffect(() => {
    if (imageUrl) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imageUrl);
      console.log(imageUrl);
    } else {
      setPreview(null)
    }
  }, [imageUrl]);

  const renderTooltip = (props) => (
    <Popover >
      {props.msg}
    </Popover>
  );

  const columns = [
    {
      title: "Medicine ID",
      field: "medicine_id",
      defaultSort: 'asc',
    },
    {
      title: "Medicine Name",
      field: "medicine_name",
      sorting: true,

    },
    {
      title: "Quantity",
      field: "quantity",
      sorting: true,

    },
    {
      title: "Price",
      field: "price",
      sorting: true,

    },
    {
      title: "Action",
      render: row => <div>
        <OverlayTrigger

          placement="top-start"
          delay={{ show: 250, }}
          overlay={renderTooltip({ msg: 'View Information' })}
        >
          <Button variant='info' className='mr-3'
            onClick={() => { alert('hi') }}>
            <AiOutlineSearch style={{ fontSize: 25, }} />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger

          placement="top-start"
          delay={{ show: 250, }}
          overlay={renderTooltip({ msg: 'Edit Details' })}
        >
          <Button variant='primary' className='mr-3'
            onClick={() => { }}>
            <FaRegEdit style={{ fontSize: 25, }} />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger

          placement="top-start"
          delay={{ show: 250, }}
          overlay={renderTooltip({ msg: 'Delete Details' })}
        >
          <Button variant='danger'
            onClick={() => {



            }}>
            <AiOutlineDelete style={{ fontSize: 25 }} />
          </Button>
        </OverlayTrigger>
      </div>,


    },
  ];


  const insertMedicine = () => {
    var stringImageUrl;
    var data = new FormData();
    data.append('vet_pharmacy', imageUrl);
    console.log(data);

    Axios.post(`${hostUrl}/upload/vet/vet_pharmacy`, data).then(function (response) {
      console.log(JSON.stringify(response.data));
      stringImageUrl = JSON.parse(JSON.stringify(response.data.profile_url));
      console.log(stringImageUrl);


      Axios.post(`${hostUrl}/pharmacy/insert/${props.data.vet_admin_id}`, {
        insertMedicineImage: stringImageUrl,
        insertMedicineName: updateMedicineName,
        insertMedicineDescription: updateMedicineDescription,
        insertMedicineQuantity: updateMedicineQuantity,
        insertMedicinePrice: updateMedicinePrice,
      });
    })
  };


  return (
    <div>
      {/* //Add */}
      <Modal show={show2} onHide={handleClose2} size="xl" >
        <Modal.Header closeButton>
          <Modal.Title>Insert Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group
                  onClick={onClickProfile}
                >
                  {preview ? (
                    <Image style={{ border: '1px solid grey', backgroundColor: 'lightblue', height: 400, width: 500, objectFit: "fill" }} src={preview} alt={"preview"} />
                  ) : (
                    <div style={{
                      border: '1px solid grey',
                      backgroundColor: '#FAFAFA', height: 400, width: 500, cursor: 'pointer', position: 'relative'
                    }}>
                      <div style={{ margin: 0, position: 'absolute', top: '50%', left: '50%', msTransform: 'translate(-50%, -50%)', transform: 'translate(-50%, -50%)', }}>
                        <AiOutlineUpload className='ml-3' style={{ fontSize: 80, color: '#57D4FF', }} />
                        <p>Upload Image File</p>
                      </div>
                    </div>
                  )}
                  <input type='file' id='file' ref={inputFile} style={{ display: 'none' }}
                    accept="image/*"
                    required
                    name='profile_pet'
                    // value={profile}
                    // key='profile_petowner'
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file && file.type.substr(0, 5) === "image") {
                        console.log(event.target.value);
                        // setprofile(event.target.value)
                        setimageUrl(file);
                      } else {
                        setimageUrl(null);
                      }
                    }}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicProduct">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={updateMedicineName}
                    placeholder="Sample Medicine"
                    onChange={(e) => {
                      setUpdateMedicineName(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicMedicineD">
                  <Form.Label>Medicine Description</Form.Label>
                  <Form.Control
                    type="text"
                    as='textarea'
                    rows={4}
                    value={updateMedicineDescription}
                    placeholder="Sample Medicine Description"
                    onChange={(e) => {
                      setUpdateMedicineDescription(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicMedicineQ">
                  <Form.Label>Medicine Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={updateMedicineQuantity}
                    placeholder="Sample Medicine Quantity"
                    onChange={(e) => {
                      setUpdateMedicineQuantity(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicMedicineQ">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={updateMedicinePrice}
                    placeholder="Sample Medicine Price"
                    onChange={(e) => {
                      setUpdateMedicinePrice(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose2();
              insertMedicine();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Data Table */}
      <Row>
        <Col>
          <MaterialTable
            style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', }}
            columns={columns}
            data={pharmacy}
            title={'Pharmacy Table'}
            cellEditable={false}
            options={{
              sorting: true
            }}
            actions={[
              {
                icon: 'add',
                tooltip: 'Add Services',
                isFreeAction: true,
                onClick: (event) => handleShow2()
              }
            ]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default PharmacyTab;
