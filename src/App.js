import { Grid } from "@mantine/core";
import Delivery from "./Components/Delivery/Delivery";
import Navbar from "./Components/Navbar/Navbar";
import Order from "./Components/Order/Order";
import Overview from "./Components/Overview/Overview";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="page">
      <div className="blueDiv"></div>
      <Grid style={{ margin: 0, padding: 0 }} gutter={30}>
        <Grid.Col xl={2} p={0} lg={2} xs={0} md={0}>
          <Sidebar />
        </Grid.Col>
        <Grid.Col lg={10} sm={12}>
          <Navbar />
          <Order />
          <Grid>
            <Grid.Col xl={8} sm={12}>
              <Delivery />
            </Grid.Col>
            <Grid.Col lg={4} sm={12}>
              <Overview />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default App;
