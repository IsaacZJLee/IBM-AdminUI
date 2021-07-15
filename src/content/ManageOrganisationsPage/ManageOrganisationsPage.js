import React, { useState } from "react";
import {
  Grid,
  Row,
  Column,
  Pagination,
  Tabs,
  Tab,
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  ButtonSet,
  Button,
  DataTable,
  TableContainer,
  TableToolbar,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavDivider,
  Tile,
  Link,
  FormGroup,
  TextInput,
  TextArea,
  Select,
  SelectItem,
  OverflowMenu,
  OverflowMenuItem,
} from 'carbon-components-react';
import { useParams } from 'react-router-dom';
import ApproveRegistrationModal from "../../components/ApproveRegistrationModal";
import AddMemberModal from "../../components/AddMemberModal";
import { Add16, View16 } from '@carbon/icons-react';

const ManageOrganisationsPage = () => {
  let organisationData = {
    id: '',
    name: '',
    description: '',
    members: '',
    type: '',
  };

  const { id } = useParams();

  const demoOrganisationData = {
    id: 'demo-organisation',
    name: 'Demo Organisation 1',
    description: 'An organisation demo for the purpose of highlighting the features of the SHF admin interface.',
    members: '14',
    type: 'University',
    membersData: [
      {
        "id": "1",
        "first_name": "Melany",
        "last_name": "Wijngaard",
        "email": "melany.wijngaard@example.com",
        "type": "Student",
        "status": "pending",
      },
      {
        "id": "2",
        "first_name": "Nanna",
        "last_name": "Pedersen",
        "email": "nanna.pedersen@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "3",
        "first_name": "Amelia",
        "last_name": "Mercier",
        "email": "amelia.mercier@example.com",
        "type": "Student",
        "status": "pending",
      },
      {
        "id": "4",
        "first_name": "Sarah",
        "last_name": "Oliver",
        "email": "sarah.oliver@example.com",
        "type": "Registered Nurse",
        "status": "active",
      },
      {
        "id": "5",
        "first_name": "Özkan",
        "last_name": "Tekelioğlu",
        "email": "özkan.tekelioğlu@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "6",
        "first_name": "Angela",
        "last_name": "Newman",
        "email": "angela.newman@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "7",
        "first_name": "Buse",
        "last_name": "Dağdaş",
        "email": "buse.dağdaş@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "8",
        "first_name": "Judith",
        "last_name": "Schmitz",
        "email": "judith.schmitz@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "9",
        "first_name": "Hector",
        "last_name": "Guerrero",
        "email": "hector.guerrero@example.com",
        "type": "Registered Nurse",
        "status": "active",
      },
      {
        "id": "10",
        "first_name": "Carsta",
        "last_name": "Rocha",
        "email": "carsta.rocha@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "11",
        "first_name": "Irene",
        "last_name": "Morales",
        "email": "irene.morales@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "12",
        "first_name": "Laly",
        "last_name": "Da silva",
        "email": "laly.dasilva@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "13",
        "first_name": "Benjamin",
        "last_name": "Patel",
        "email": "benjamin.patel@example.com",
        "type": "Registered Nurse",
        "status": "active",
      },
      {
        "id": "14",
        "first_name": "Noah",
        "last_name": "Poulsen",
        "email": "noah.poulsen@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "15",
        "first_name": "Jeffrey",
        "last_name": "Myers",
        "email": "jeffrey.myers@example.com",
        "type": "Doctor",
        "status": "active",
      },
      {
        "id": "16",
        "first_name": "Noélie",
        "last_name": "Roux",
        "email": "noélie.roux@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "17",
        "first_name": "Jake",
        "last_name": "Brown",
        "email": "jake.brown@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "18",
        "first_name": "Abigail",
        "last_name": "Hamilton",
        "email": "abigail.hamilton@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "19",
        "first_name": "Abssilão",
        "last_name": "Rodrigues",
        "email": "abssilão.rodrigues@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "20",
        "first_name": "Sofia",
        "last_name": "Sales",
        "email": "sofia.sales@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "21",
        "first_name": "Jeremy",
        "last_name": "Weiss",
        "email": "jeremy.weiss@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "22",
        "first_name": "Joan",
        "last_name": "Vega",
        "email": "joan.vega@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "23",
        "first_name": "Phillip",
        "last_name": "Torres",
        "email": "phillip.torres@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "24",
        "first_name": "Dora",
        "last_name": "Barnes",
        "email": "dora.barnes@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "25",
        "first_name": "Julie",
        "last_name": "Cole",
        "email": "julie.cole@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "26",
        "first_name": "Florence",
        "last_name": "Newman",
        "email": "florence.newman@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "27",
        "first_name": "Noah",
        "last_name": "Bonnet",
        "email": "noah.bonnet@example.com",
        "type": "Student",
        "status": "active",
      },
      {
        "id": "29",
        "first_name": "Eemil",
        "last_name": "Neva",
        "email": "eemil.neva@example.com",
        "type": "Student",
        "status": "active",
      }
    ]
  };

  if (id === demoOrganisationData.id) {
    organisationData = demoOrganisationData;
  }

  const [openApproveRegistrationModal, setOpenApproveRegistrationModal] = useState(false);
  const [approveRegistrationModalData, setApproveRegistrationModalData] = useState(false);

  const [openAddMemberModal, setOpenAddMemberModal] = useState(false);
  const [addMemberModalData, setAddMemberModalData] = useState(false);
  
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [currentTab, setCurrentTab] = useState(1);

  const headerData = [
    {
      header: 'First Name',
      key: 'first_name',
    },
    {
      header: 'Last Name',
      key: 'last_name',
    },
    {
      header: 'Email',
      key: 'email',
    },
    {
      header: 'Type',
      key: 'type',
    },
    {
      header: 'Status',
      key: 'status',
    },
    {
      header: 'Actions',
      key: 'actions',
    },
  ];

  const changeTab = (tab) => {
    setCurrentTab(tab);
  }

  return (
    <>
      <ApproveRegistrationModal openModal={openApproveRegistrationModal} setOpenModal={setOpenApproveRegistrationModal} modalData={approveRegistrationModalData} setModalData={setApproveRegistrationModalData} />
      <AddMemberModal openModal={openAddMemberModal} setOpenModal={setOpenAddMemberModal} modalData={addMemberModalData} setModalData={setAddMemberModalData} />

      <SideNav isFixedNav expanded={true} isChildOfHeader={true} aria-label="Side navigation" style={{zIndex:1}}>
        <SideNavItems>
          <SideNavLink large>Organisation</SideNavLink>
          <SideNavDivider></SideNavDivider>
          <SideNavLink large href="javascript:void(0)" isActive={currentTab===1} onClick={e => changeTab(1)}>Members</SideNavLink>
          <SideNavLink large href="javascript:void(0)" isActive={currentTab===2} onClick={e => changeTab(2)}>Pending Registrations</SideNavLink>
          <SideNavLink large href="javascript:void(0)" isActive={currentTab===3} onClick={e => changeTab(3)}>Settings</SideNavLink>
        </SideNavItems>
      </SideNav>

      <Grid fullWidth>
        <Row>
          <Column lg={{ span: 10, offset: 2 }} style={{ 'padding': '20px 20px', 'height': '100vh' }}>
            <h3 style={{ 'padding': '20px 0 20px 0' }}>{organisationData.name}</h3>

            <div>
              {currentTab === 1 &&
                <>
                  <DataTable rows={organisationData.membersData.filter((row) => row.status !== 'pending').slice(firstRowIndex, firstRowIndex + currentPageSize)} headers={headerData.splice(0,5)} isSortable>
                    {({ rows,
                        headers,
                        getHeaderProps,
                        getRowProps,
                        getTableProps,
                        getToolbarProps,
                        onInputChange,
                        getTableContainerProps, }) => (
                      <TableContainer title="Organisation Members" description="A table of organisation members.">
                        <TableToolbar {...getToolbarProps()} aria-label="data table toolbar">
                          <TableToolbarContent>
                            <TableToolbarSearch onChange={onInputChange} />
                            <TableToolbarMenu light>
                              <TableToolbarAction onClick={e => true}>
                                Download
                              </TableToolbarAction>
                              <TableToolbarAction onClick={e => true}>
                                Upload
                              </TableToolbarAction>
                              <TableToolbarAction onClick={e => true}>
                                Refresh
                              </TableToolbarAction>
                            </TableToolbarMenu>
                            <Button renderIcon={Add16} onClick={e => { setOpenAddMemberModal(!openAddMemberModal); setAddMemberModalData()}}>Create Member</Button>
                          </TableToolbarContent>
                        </TableToolbar>
                        <Table {...getTableProps()}>
                          <TableHead>
                            <TableRow>
                              {headers.map((header) => (
                                <TableHeader {...getHeaderProps({ header })}>
                                  {header.header}
                                </TableHeader>
                              ))}
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow key={row.id}>
                                {row.cells.map((cell) => (
                                  <TableCell key={cell.id}>{cell.value}</TableCell>
                                ))}
                                <TableCell className="bx--table-column-menu">
                                  <OverflowMenu flipped>
                                    <OverflowMenuItem itemText="View Member" />
                                    <OverflowMenuItem itemText="Edit Member" />
                                    <OverflowMenuItem hasDivider isDelete itemText="Delete Member" />
                                  </OverflowMenu>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    )}
                  </DataTable>
                  <Pagination
                    totalItems={organisationData.membersData.filter((row) => row.status !== 'pending').length}
                    backwardText="Previous page"
                    forwardText="Next page"
                    pageSize={currentPageSize}
                    pageSizes={[5, 10, 15, 25]}
                    itemsPerPageText="Items per page"
                    onChange={({ page, pageSize }) => {
                      if (pageSize !== currentPageSize) {
                        setCurrentPageSize(pageSize);
                      }
                      setFirstRowIndex(pageSize * (page - 1));
                    }}
                  />
                </>
              }
              
              {currentTab === 2 && organisationData?.membersData?.length > 0 && 
                <DataTable rows={organisationData.membersData.filter((row) => row.status === 'pending')} headers={headerData} isSortable>
                  {({ rows,
                      headers,
                      getHeaderProps,
                      getRowProps,
                      getTableProps,
                      getToolbarProps,
                      onInputChange,
                      getTableContainerProps, }) => (
                    <TableContainer title="Pending Organisation Members" description="A table of pending organisation members.">
                      <TableToolbar {...getToolbarProps()} aria-label="data table toolbar">
                        <TableToolbarContent>
                          <TableToolbarSearch onChange={onInputChange} />
                          <TableToolbarMenu light>
                            <TableToolbarAction onClick={true}>
                              Download
                            </TableToolbarAction>
                            <TableToolbarAction onClick={true}>
                              Upload
                            </TableToolbarAction>
                            <TableToolbarAction onClick={true}>
                              Refresh
                            </TableToolbarAction>
                          </TableToolbarMenu>
                        </TableToolbarContent>
                      </TableToolbar>
                      <Table {...getTableProps()}>
                        <TableHead>
                          <TableRow>
                            {headers.map((header) => (
                              <TableHeader {...getHeaderProps({ header })}>
                                {header.header}
                              </TableHeader>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.id}>
                              {row.cells.map((cell) => (
                                <>
                                  {!cell.id.includes('actions') &&
                                    <TableCell key={cell.id}>{cell.value}</TableCell>
                                  }
                                  {cell.id.includes('actions') &&
                                    <TableCell key='actions'>
                                      <ButtonSet>
                                        <Button renderIcon={View16} onClick={e => { setOpenApproveRegistrationModal(!openApproveRegistrationModal); setApproveRegistrationModalData(organisationData.membersData.find(x => x.id === row.id))}}>Review Request</Button>
                                      </ButtonSet>
                                    </TableCell>
                                  }
                                </>
                              ))}                              
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </DataTable>
              }
              {currentTab === 3 &&
                <>
                  <Row>
                    <Column>
                      <Tile>
                        <strong>Organisation Info</strong>
                        <FormGroup style={{ marginTop: '1rem' }}>
                          <TextInput
                            labelText="Organisation Name"
                            defaultValue={organisationData.name}
                            placeholder="Enter Organisation Name"
                            style={{ marginBottom: '1rem' }}
                          />
                          <TextArea
                            labelText="Organisation Description"
                            defaultValue={organisationData.description}
                            placeholder="Enter Organisation Description"
                            style={{ marginBottom: '1rem' }}
                          />
                          <Select
                            labelText="Organisation Type"
                            defaultValue={organisationData.type}
                            style={{ marginBottom: '1rem' }}
                          >
                            <SelectItem value="university" text="University" />
                            <SelectItem value="hospital" text="Hospital" />
                            <SelectItem value="practice" text="Practice" />
                            <SelectItem value="pharmacy" text="Pharmacy" />
                            <SelectItem value="laboratory" text="Laboratory" />
                            <SelectItem value="government" text="Government" />
                          </Select>

                          <Button type="submit">
                            Update
                          </Button>
                        </FormGroup>
                      </Tile>
                    </Column>
                    <Column>
                      <Tile>
                        <strong>Danger Zone</strong>

                        <FormGroup style={{ marginTop: '1rem' }}>
                          <Button type="submit" kind="danger" style={{ marginBottom: '1rem' }}>
                            Delete Organisation
                          </Button>
                        </FormGroup>
                      </Tile>
                    </Column>
                  </Row>
                </>
              }
            </div>
          </Column>
        </Row>
      </Grid>
    </>
  );
};

export default ManageOrganisationsPage;
