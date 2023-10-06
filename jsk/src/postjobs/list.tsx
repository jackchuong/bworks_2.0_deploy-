import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DateField,
  SingleFieldList,
  ChipField,
  ReferenceArrayField,
  ReferenceField,
  TextInput,
} from "react-admin";
import CurrencyNumberField from "../components/currencyNumberField";

import LinkBidField from "../components/linkBidsField";

const filters = [<TextInput label="Search" source="textSearch" alwaysOn />];

const ListScreen = () => {
  return (
    <List
      filters={filters}
      perPage={25}
      sort={{ field: "createdAt", order: "desc" }}
      hasCreate={false}
      filter={{ queryType: "jobSeeker", isApproved: true }}
    >
      <Datagrid bulkActionButtons={false}>
        <TextField source="name" />
        <LinkBidField />
        <CurrencyNumberField source="budget" threshold={10000} />
        <ReferenceField reference="users" source="employerId" link={"show"}>
          <TextField source="fullName" />
        </ReferenceField>
        <ReferenceArrayField reference="skills" source="skills">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
        <DateField source="expireDate" showTime />
      </Datagrid>
    </List>
  );
};

export default ListScreen;
