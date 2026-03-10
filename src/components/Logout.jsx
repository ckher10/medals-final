import { ExitIcon } from "@radix-ui/react-icons";
import { Button, Tooltip } from "@radix-ui/themes";

function Logout(props) {
  return (
    <Tooltip content="Logout">
      <Button onClick={props.onLogout} variant="soft" color="crimson">
        Logout
      </Button>
    </Tooltip>
  );
}

export default Logout;
