import withDataFetching from "@/hoc/withDataFetching";
import UserList from "@/component/userList";
import "@/app/styles/a5q11.css";

const UserListWithData = withDataFetching(UserList);

export default function Question11Page() {
  return (
    <div className="q11Wrapper">
      <h1 className="q11Title">WithDataFetching</h1>
      <UserListWithData />
    </div>
  );
}
