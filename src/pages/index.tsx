import type { NextPage } from "next";
import { AdminLayout } from "@layout";
import { Card } from "react-bootstrap";
import { WeekChart, UserTableComponent } from "@components";

const Home: NextPage = () => {
  return (
    <AdminLayout>
      <div className="row">
        <div className="col-md-12">
          <Card className="mb-4">
            <Card.Header>Sample Dashboard</Card.Header>
            <Card.Body>
              <WeekChart/>
              <hr />
              <UserTableComponent />
            </Card.Body>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Home;
