export const TOGGLE_NAV_DRAWER = 'TOGGLE_NAV_DRAWER';
export type TOGGLE_NAV_DRAWER = typeof TOGGLE_NAV_DRAWER;

export interface ToggleNavDrawer {
  type: TOGGLE_NAV_DRAWER;
}

export const toggleNavDrawer = (): ToggleNavDrawer => ({
  type: TOGGLE_NAV_DRAWER
});
