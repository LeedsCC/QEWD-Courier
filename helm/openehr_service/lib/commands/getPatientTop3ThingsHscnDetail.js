/*

 ----------------------------------------------------------------------------
 |                                                                          |
 | Copyright (c) 2018-19 Ripple Foundation Community Interest Company       |
 | All rights reserved.                                                     |
 |                                                                          |
 | http://rippleosi.org                                                     |
 | Email: code.custodian@rippleosi.org                                      |
 |                                                                          |
 | Author: Alexey Kucherenko <alexei.kucherenko@gmail.com>                  |
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

  12 April 2019

*/

'use strict';

const { logger } = require('../../lib/core');
const { BadRequestError } = require('../errors');
const { isPatientIdValid } = require('../shared/validation');
const { Heading } = require('../shared/enums');

class GetPatientTop3ThingsHscnDetailCommand {
  constructor(ctx) {
    this.ctx = ctx;
  }

  /**
   * @param  {string} site
   * @param  {string} patientId
   * @param  {Object} headers
   * @return {Promise.<Object>}
   */
  async execute(site, patientId, headers) {
    logger.info('commands/getPatientTop3ThingsHscnDetail', { site, patientId });

    logger.debug('headers:', headers);

    const valid = isPatientIdValid(patientId);
    if (!valid.ok) {
      throw new BadRequestError(valid.error);
    }

    const { top3ThingsService } = this.ctx.services;
    // const responseObj = top3ThingsService.getLatestDetailByPatientId(patientId);


    const responseObj = await top3ThingsService.getLatest(patientId, Heading.TOP_3_THINGS);

    return responseObj;
  }
}

module.exports = GetPatientTop3ThingsHscnDetailCommand;
