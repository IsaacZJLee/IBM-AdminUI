import React, { useState } from 'react';
import {
  Grid,
  Row,
  Column,
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
  Link
} from 'carbon-components-react';
import { useHistory, useLocation } from 'react-router-dom';
import { Add16, ArrowRight16 } from '@carbon/icons-react';
import AddOrganisationModal from "../../components/AddOrganisationModal";

const OrganisationsPage = () => {
  const organisationsData = [
    {
      id: 'demo-organisation',
      name: 'Demo Organisation 1',
      members: '14',
      type: 'University',
      actions: <ButtonSet> <Button renderIcon={ArrowRight16} isExpressive onClick={e => manageOrganisation('demo-organisation')}>Manage</Button> </ButtonSet>
    },
  ];

  const headerData = [
    {
      header: 'Name',
      key: 'name',
    },
    {
      header: 'Members',
      key: 'members',
    },
    {
      header: 'Type',
      key: 'type',
    },
  ];

  const manageOrganisation = (organisationID) => {
    history.push(`/organisations/manage/${organisationID}`);
  }

  const history = useHistory();
  const params = new URLSearchParams(useLocation().search);

  const [openAddOrganisationModal, setOpenAddOrganisationModal] = useState(params.get("addOrganisation") == 'true');
  const [addMemberOrganisationData, setAddMemberOrganisationData] = useState(false);

  return (
    <>
      <AddOrganisationModal openModal={openAddOrganisationModal} setOpenModal={setOpenAddOrganisationModal} modalData={addMemberOrganisationData} setModalData={setAddMemberOrganisationData} />
      <Grid fullWidth>
        <Row>
          <Column lg={{ span: 12 }} style={{ 'padding': '0px 20px 50px 20px' }}>
            <h3 style={{ 'padding': '40px 0' }}>Organisations</h3>

            <DataTable rows={organisationsData} headers={headerData} isSortable>
              {({ rows,
                headers,
                getHeaderProps,
                getRowProps,
                getTableProps,
                getToolbarProps,
                onInputChange,
                getTableContainerProps, }) => (
                <TableContainer>
                  <TableToolbar {...getToolbarProps()} aria-label="data table toolbar">
                    <TableToolbarContent>
                      <TableToolbarSearch onChange={onInputChange} />
                      <TableToolbarMenu light>
                        <TableToolbarAction onClick={console.log('Action 1 Click')}>
                          Action 1
                        </TableToolbarAction>
                        <TableToolbarAction onClick={console.log('Action 2 Click')}>
                          Action 2
                        </TableToolbarAction>
                        <TableToolbarAction onClick={console.log('Action 3 Click')}>
                          Action 3
                        </TableToolbarAction>
                      </TableToolbarMenu>
                      <Button renderIcon={Add16} onClick={e => { setOpenAddOrganisationModal(!openAddOrganisationModal); setAddMemberOrganisationData() }}>Create Organisation</Button>
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
                            <TableCell key={cell.id}>
                              {cell.id === 'demo-organisation:name' &&
                                <Link href="javascript:void(0)" onClick={e => manageOrganisation('demo-organisation')}>
                                  {cell.value}
                                </Link>
                              }
                              {cell.id !== 'demo-organisation:name' &&
                                <>
                                  {cell.value}
                                </>
                              }
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </DataTable>
          </Column>
        </Row>
      </Grid>
    </>
  );
};

export default OrganisationsPage;
