import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button, Form, Card, Modal, Tooltip, OverlayTrigger, Popover, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import { AiOutlineDelete, AiOutlineSearch, AiOutlineUpload } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import MaterialTable from 'material-table';
import { hostUrl } from "../../Components/Host";



function ProductTable(props) {


  const [updateProductId, setUpdateProductId] = useState("");
  const [updateProductName, setUpdateProductName] = useState("");
  const [updateProductDescription, setUpdateProductDescription] = useState("");
  const [updateProductQuantity, setUpdateProductQuantity] = useState("");
  const [updateProductPrice, setUpdateProductPrice] = useState();
  const [product, setProduct] = useState([]);
  //Update
  const [showUpdate, setShowUpdate] = useState(false);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = (id, name, desc, quantity) => {
    setShowUpdate(true);
    setUpdateProductId(id);
    setUpdateProductName(name);
    setUpdateProductDescription(desc);
    setUpdateProductQuantity(quantity);
  };
  //Insert
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => {
    setShow2(true);
  };

  useEffect(() => {

    Axios.get(`${hostUrl}/products/${props.data.vet_admin_id}`).then((response) => {
      setProduct(response.data);
    });
  }, [product]);

  const deleteProduct = (product_id) => {
    Axios.delete(`${hostUrl}/product/delete/${product_id}`);
  };

  const updateProduct = (product_id) => {
    Axios.put(`${hostUrl}/product/update/${product_id}`, {
      updateProductName: updateProductName,
      updateProductDescription: updateProductDescription,
      updateProductQuantity: updateProductQuantity,
    });
  };




  const [imageUrl, setimageUrl] = useState();
  // const [profile, setprofile] = useState();
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
      title: "Product ID",
      field: "product_id",
      defaultSort: 'asc',
    },
    {
      title: "Product Name",
      field: "product_name",
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


  const insertProduct = () => {
    var stringImageUrl;
    var data = new FormData();
    data.append('vet_product', imageUrl);
    console.log(data);

    Axios.post(`${hostUrl}/upload/vet/vet_product`, data).then(function (response) {
      console.log(JSON.stringify(response.data));
      stringImageUrl = JSON.parse(JSON.stringify(response.data.profile_url));
      console.log(stringImageUrl);


      Axios.post(`${hostUrl}/product/insert/${props.data.vet_admin_id}`, {
        insertProductImage: stringImageUrl,
        insertProductName: updateProductName,
        insertProductDescription: updateProductDescription,
        insertProductQuantity: updateProductQuantity,
        insertProductPrice: updateProductPrice,
      });
    })
  };

  return (
    <div>
      <Modal show={showUpdate} onHide={handleCloseUpdate}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicProduct">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={updateProductName}
                placeholder="Sample Product"
                onChange={(e) => {
                  setUpdateProductName(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProductD">
              <Form.Label>Product Description</Form.Label>
              <Form.Control
                type="text"
                value={updateProductDescription}
                placeholder="Sample Product Description"
                onChange={(e) => {
                  setUpdateProductDescription(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicProductQ">
              <Form.Label>Product Quantity</Form.Label>
              <Form.Control
                type="number"
                value={updateProductQuantity}
                placeholder="Sample Product Quantity"
                onChange={(e) => {
                  setUpdateProductQuantity(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseUpdate}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleCloseUpdate();
              updateProduct(updateProductId);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

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
                    value={updateProductName}
                    placeholder="Sample Product"
                    onChange={(e) => {
                      setUpdateProductName(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicProductD">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    type="text"
                    as='textarea'
                    rows={4}
                    value={updateProductDescription}
                    placeholder="Sample Product Description"
                    onChange={(e) => {
                      setUpdateProductDescription(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicProductQ">
                  <Form.Label>Product Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={updateProductQuantity}
                    placeholder="Sample Product Quantity"
                    onChange={(e) => {
                      setUpdateProductQuantity(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicProductQ">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    value={updateProductPrice}
                    placeholder="Sample Product Price"
                    onChange={(e) => {
                      setUpdateProductPrice(e.target.value);
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
              insertProduct();
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
            data={product}
            title={'Products Table'}
            cellEditable={false}
            options={{
              sorting: true
            }}
            actions={[
              {
                icon: 'add',
                tooltip: 'Add Product',
                isFreeAction: true,
                onClick: (event) => handleShow2()
              }
            ]}
          />
        </Col>
      </Row>


    </div>
  );
}

export default ProductTable;
