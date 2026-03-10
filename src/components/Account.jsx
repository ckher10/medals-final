import { useState } from "react";
import Logout from "./Logout";
import { PersonIcon } from "@radix-ui/react-icons";
import {
  Button,
  Tooltip,
  Dialog,
  Flex,
  Separator,
  DataList,
} from "@radix-ui/themes";

function Account(props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip content="Login">
        <Button
          onClick={() => setOpen(true)}
          style={{ position: "fixed", bottom: 20, left: 20, zIndex: 100 }}
          variant="ghost"
        >
          <PersonIcon />
        </Button>
      </Tooltip>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Content maxWidth="450px">
          <Dialog.Title>Account</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            <DataList.Root>
              <DataList.Item align="center"></DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Username</DataList.Label>
                <DataList.Value>{props.user.name}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="88px">Mail</DataList.Label>
                <DataList.Value>{props.user.email}</DataList.Value>
              </DataList.Item>
            </DataList.Root>
            <Separator my="3" size="4" />
          </Dialog.Description>

          <h3>Roles</h3>
          <ul>
            {props.user.canPost && <li>Post</li>}
            {props.user.canPatch && <li>Patch</li>}
            {props.user.canDelete && <li>Delete</li>}
          </ul>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Logout onLogout={props.onLogout} />
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}

export default Account;
