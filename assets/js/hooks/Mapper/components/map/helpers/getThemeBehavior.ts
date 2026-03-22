import { SolarSystemNodeDefault, SolarSystemNodeTheme } from '../components/SolarSystemNode';
import type { NodeProps } from 'reactflow';
import type { ComponentType } from 'react';
import { MapSolarSystemType } from '../map.types';
import { ConnectionMode } from 'reactflow';
export type SolarSystemNodeComponent = ComponentType<NodeProps<MapSolarSystemType>>;
interface ThemeBehavior {
  isPanAndDrag: boolean;
  nodeComponent: SolarSystemNodeComponent;
  connectionMode: ConnectionMode;
  snapGrid: [number, number];
}
const THEME_BEHAVIORS: {
  [key: string]: ThemeBehavior;
} = {
  default: {
    isPanAndDrag: false,
    nodeComponent: SolarSystemNodeDefault,
    connectionMode: ConnectionMode.Loose,
    snapGrid: [25, 25],
  },
  pathfinder: {
    isPanAndDrag: true,
    nodeComponent: SolarSystemNodeTheme,
    connectionMode: ConnectionMode.Loose,
    snapGrid: [17, 17],
  },
  feltd: {
    isPanAndDrag: true,
    nodeComponent: SolarSystemNodeTheme,
    connectionMode: ConnectionMode.Loose,
    snapGrid: [238, 51],
  },
};
export function getBehaviorForTheme(themeName: string) {
  return THEME_BEHAVIORS[themeName] ?? THEME_BEHAVIORS.default;
}
