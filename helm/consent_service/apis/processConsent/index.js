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

  22 March 2020

*/

'use strict';

const logger = require('../../logger').logger;

const ConsentProcessorService = require('../../services/consentProcessorService');

module.exports = async function(args, finished) { 

    console.log('processing')

    try {
        const config = this.userDefined.globalConfig["consent_service"];

        const pendingCache = this.db.use('Pending');

        const processor = new ConsentProcessorService(pendingCache, config);

        await processor.process();
    } catch (error) {
        logger.error('', error);
        console.log(error);
    }

    finished({ ok: true })
}