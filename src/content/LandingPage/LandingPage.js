import React from 'react';
import {
  Grid,
  Row,
  Column,
  Link,
  Tile,
  Button,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListRow,
  StructuredListCell,
  StructuredListBody
} from 'carbon-components-react';

import {
  Add16,
  User16,
  View16,
  Cognitive32,
  Blockchain32,
  Collaborate32
} from '@carbon/icons-react';

const LandingPage = () => {
  return (
    <>
      <Grid fullWidth style={{ backgroundColor: '#f4f4f4', height: '100vh' }}>
        <Row>
          <Column lg={{ span: 12 }}>
            <h3 style={{ 'padding': '40px 0' }}>Dashboard</h3>
          </Column>
          <Column lg={{ span: 6 }}>
            <Tile style={{ backgroundColor: 'white', marginBottom: '30px', minHeight: '300px', position: 'relative' }}>
              <strong>Organisations summary</strong>
              <Link href="/#/organisations" style={{ float: 'right' }}>View all</Link>
              <div style={{ padding: '20px 0 0 0' }}>
                <h4 style={{ color: '#525252' }}>1</h4>
                <span style={{ color: '#525252' }}>Organisations</span>

                <ul style={{ padding: '40px 0 20px 0' }}>
                  <li>
                    <Link href="/#/organisations/manage/demo-organisation">
                      Demo Organisation
                    </Link>
                    <span style={{ float: 'right' }}>
                      <User16 style={{ verticalAlign: 'middle' }}></User16>
                      12
                    </span>
                  </li>
                </ul>
              </div>
              <div style={{ position: 'absolute', bottom: '0', float: 'right', width: '100%', marginLeft: '-1rem' }}>
                <Button style={{ float: 'right' }} renderIcon={Add16} kind="ghost">Create organisation</Button>
              </div>
            </Tile>
          </Column>
          <Column lg={{ span: 3 }}>
            <Tile style={{ backgroundColor: 'white', marginBottom: '30px', minHeight: '300px', position: 'relative' }}>
              <strong>For You</strong>

              <ul style={{ padding: '20px 0 20px 0' }}>
                <li>
                  <Link href="/#/organisations/manage/demo-organisation">
                    <p>
                      2 new pending registrations for approval in Demo Organisation
                    </p>
                  </Link>

                  <div style={{ paddingTop: '10px' }}>
                    <View16 style={{ verticalAlign: 'middle', marginRight: '10px' }}></View16>
                    <Link href="/#/organisations/manage/demo-organisation">
                      View pending registrations
                    </Link>
                  </div>
                </li>
              </ul>
            </Tile>
          </Column>
          <Column lg={{ span: 3 }}>
            <Tile style={{ backgroundImage: 'linear-gradient(#012c9c,#5c4bd2)', marginBottom: '30px', minHeight: '300px', position: 'relative', color: 'white' }}>
              <strong>Platform updates</strong>

              <ul style={{ padding: '20px 0 20px 0' }}>
                <li>
                  <Link style={{color: 'white', marginBottom: '15px'}} href="/#/">
                    SHF platform launches to 12 new Hospitals in Canada
                  </Link>
                  <Link style={{color: 'white', marginBottom: '15px'}} href="/#/">
                    New organisation management functions added to admin dashboard
                  </Link>
                  <Link style={{color: 'white', marginBottom: '15px'}} href="/#/">
                    SHF admin platform launches on IBM cloud
                  </Link>
                </li>
              </ul>
            </Tile>
          </Column>
          <Column lg={{ span: 12 }}>
            <Tile style={{ backgroundColor: 'white', marginBottom: '30px', minHeight: '300px', position: 'relative' }}>
              <strong>Sankofa Healthcare Framework</strong>

              <Row style={{marginTop: '20px'}}>
                <Column lg={{ span: 4 }}>
                  <Tile>
                    <Cognitive32 style={{margin: '10px 0px'}}></Cognitive32>
                    <p><strong>Sankofa is a symbol for learning from the wisdom of the past.</strong></p>
                    <p style={{ marginBottom: '20px' }}>
                      The word comes from the Twi language of the Akan subgroup of communities from Ghana meaning 'Go back and get it'. SHF investigates and addresses the gaps in the intercommunication between Healthcare systems and secured granular access to data using the Blockchain Paltform and other related middleware technologies.
                    </p>
                  </Tile>
                </Column>
                <Column lg={{ span: 4 }}>
                  <Tile>
                    <Blockchain32 style={{margin: '10px 0px'}}></Blockchain32>
                    <p><strong>The Sankofa Healthcare Framework is a private Blockchain Platform system for Healthcare for sensitive, interoperable data warehouses through standards-based APIs.</strong></p>
                    <p style={{ marginBottom: '20px' }}>
                    Specifically, the open-source nature and modularity of the Hyperledger enterprise blockchain has many core features and functionalities built-in and needed to satisfy the interoperability of various interested parties and third parties.
                    </p>
                  </Tile>
                </Column>
                <Column lg={{ span: 4 }}>
                  <Tile>
                    <Collaborate32 style={{margin: '10px 0px'}}></Collaborate32>
                    <p><strong>The Sankofa framework will provide hierarchical access control while preserving the data retension privacy concerns of each individual user and access to their data.</strong></p>
                    <p style={{ marginBottom: '20px' }}>
                    Contracts between individuals and organizations will grant specific data usage and retention rules agreed upon. The data will be encrypted and secured off the Blockchain network and hash of the data stored on the network.
                    </p>
                  </Tile>
                </Column>
              </Row>
            </Tile>
          </Column>
        </Row>
      </Grid>
    </>
  );
};

export default LandingPage;
