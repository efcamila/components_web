import { Button } from "../buttons/clasic/Button";
import Badge from "./Badge";
import { Card, CardHeader, CardTitle } from "../cards/Card";

const TestBadge = () => {
  return (
    <>
       <div className="w-90 relative">
        <Card>
            <Badge position="inside-left" style="warning-solid">Recommended</Badge>
            <br/>
            <CardHeader>
                <CardTitle>Title</CardTitle>
            </CardHeader>
        </Card>
      </div>
      <div className="w-90 relative">
        <Card>
            <Badge position="inside-right" style="warning-solid">Recommended</Badge>
            <CardHeader>
                <CardTitle>Title</CardTitle>
            </CardHeader>
        </Card>
      </div>
      <div className="w-32 relative">
        <Button type="button" style="danger" variant="solid">
          Text
          <Badge position="outside-right" style="primary-solid">
            99+
          </Badge>
        </Button>
      </div>
      <div className="w-32 relative">
        <Button type="button" style="warning" variant="solid">
          Text
          <Badge position="outside-left" style="primary-solid">
            99+
          </Badge>
        </Button>
      </div>
    </>
  );
};

export default TestBadge;
