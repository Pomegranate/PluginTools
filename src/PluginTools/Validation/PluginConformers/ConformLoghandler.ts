/**
 * @file ConformLoghandler
 * @author Jim Bulkowski <jim.b@paperelectron.com>
 * @project PluginTools
 * @license MIT {@link http://opensource.org/licenses/MIT}
 */

import {
  variables,
  installs,
  directories,
  configName,
  configType,
  configFrameworkPlugin,
  configInjectorDeps,
  hooksRequired,
  hooksOptional,
  commands,
  dashboard,
  applicationMember
} from '../ValidatorFuns'

export const ConformLoghandler = {
  variables: variables,
  directories: directories,
  configuration: {
    name: configName,
    type: configType,
    frameworkPlugin: configFrameworkPlugin,
    applicationMember: applicationMember,
    depends: configInjectorDeps('depends'),
    provides: configInjectorDeps('provides'),
    optional: configInjectorDeps('optional'),
  },
  hooks: {
    load: hooksRequired('load'),
    start: hooksOptional('start'),
    stop: hooksOptional('stop')
  },
  commands: commands,
  installs: installs,
  dashboard: dashboard
}