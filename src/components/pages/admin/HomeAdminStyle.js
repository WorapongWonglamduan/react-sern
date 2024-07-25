import { createGlobalStyle } from "styled-components";

const HomeAdminStyle = createGlobalStyle`
  :where(.css-dev-only-do-not-override-98ntnt).ant-spin .ant-spin-dot-holder {
  color: #000000;
}
.wrap-action
  :where(.css-dev-only-do-not-override-98ntnt).ant-btn-default:not(
    :disabled
  ):not(.ant-btn-disabled):hover {
  color: #000000;
  border-color: #000000;
  background: #ffffff;
}

:where(.css-dev-only-do-not-override-98ntnt).ant-dropdown
  .ant-dropdown-menu
  .ant-dropdown-menu-item-selected,
:where(.css-dev-only-do-not-override-98ntnt).ant-dropdown-menu-submenu
  .ant-dropdown-menu
  .ant-dropdown-menu-item-selected,
:where(.css-dev-only-do-not-override-98ntnt).ant-dropdown
  .ant-dropdown-menu
  .ant-dropdown-menu-submenu-title-selected,
:where(.css-dev-only-do-not-override-98ntnt).ant-dropdown-menu-submenu
  .ant-dropdown-menu
  .ant-dropdown-menu-submenu-title-selected {
  background-color: #d8dcdf;
}
:where(.css-dev-only-do-not-override-98ntnt).ant-btn-primary {
  color: #000;
  background: #a9adaf;
  box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
}
:where(.css-dev-only-do-not-override-98ntnt).ant-btn-primary:not(:disabled):not(
    .ant-btn-disabled
  ):hover {
  color: #fff;
  background: #d8dcdf;
}
:where(.css-dev-only-do-not-override-98ntnt).ant-btn-link {
  color: #000;
}

.ant-checkbox-checked .ant-checkbox-inner {
  background-color: #363636;
  border-color: rgb(173, 173, 173);
}

:where(.css-dev-only-do-not-override-98ntnt).wrap-action
  .ant-table-wrapper
  .ant-table-filter-trigger.active {
  color: #383838;
}
:where(.css-dev-only-do-not-override-98ntnt).ant-table-wrapper
  .ant-table-filter-trigger.active {
  color: #383838;
}
  :where(.css-dev-only-do-not-override-98ntnt).ant-table-wrapper .ant-table-column-sorter-up.active, :where(.css-dev-only-do-not-override-98ntnt).ant-table-wrapper .ant-table-column-sorter-down.active {
    color: #383838;
}
`;

export default HomeAdminStyle;
