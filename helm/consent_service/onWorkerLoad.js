/*

 ----------------------------------------------------------------------------
 |                                                                          |
 | http://www.synanetics.com                                                |
 | Email: support@synanetics.com                                            |
 |                                                                          |
 | Author: Richard Brown                                                    |
 |                                                                          |
 | Licensed under the Apache License, Version 2.0 (the "License");          |
 | you may not use this file except in compliance with the License.         |
 | You may obtain a copy of the License at                                  |
 |                                                                          |
 |     http://www.apache.org/licenses/LICENSE-2.0                           |
 |                                                                          |
 | Unless required by applicable law or agreed to in writing, software      |
 | distributed under the License is distributed on an "AS IS" BASIS,        |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. |
 | See the License for the specific language governing permissions and      |
 |  limitations under the License.                                          |
 ----------------------------------------------------------------------------

  23 Oct 2019

*/

'use strict';

const globalConfig = require('/opt/qewd/mapped/configuration/global_config.json');

/* 
  allows bypass of certificate validation
  when the certificate is unsigned
  this should only be false in non-production
  environments
*/
if (globalConfig.consent_service.rejectUnauthorized === false) {
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
}

module.exports = function () {
  this.userDefined.globalConfig = globalConfig;
};
