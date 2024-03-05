"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateToolValidation = exports.createToolValidation = void 0;
/* -----------------------------------------------------------------------------
 *  Copyright (c) 2023, Fraunhofer-Gesellschaft zur Förderung der angewandten Forschung e.V.
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU Affero General Public License as published by
 *  the Free Software Foundation, version 3.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU Affero General Public License for more details.
 *
 *  You should have received a copy of the GNU Affero General Public License
 *  along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 *  No Patent Rights, Trademark Rights and/or other Intellectual Property
 *  Rights other than the rights under this license are granted.
 *  All other rights reserved.
 *
 *  For any other rights, a separate agreement needs to be closed.
 *
 *  For more information please contact:
 *  Fraunhofer FOKUS
 *  Kaiserin-Augusta-Allee 31
 *  10589 Berlin, Germany
 *  https://www.fokus.fraunhofer.de/go/fame
 *  famecontact@fokus.fraunhofer.de
 * -----------------------------------------------------------------------------
 */
const express_validator_1 = require("express-validator");
const clm_ext_service_providers_1 = require("clm-ext-service_providers");
const sharedSchema = {};
const createToolSchema = Object.assign(Object.assign({}, sharedSchema), { serviceProviderId: {
        in: ['body'],
        exists: true,
        isString: {
            errorMessage: "Has to be string",
            bail: true
        },
        custom: {
            options: (value) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    yield clm_ext_service_providers_1.spBDTOInstance.findById(value);
                    return Promise.resolve(true);
                }
                catch (err) {
                    Promise.reject(err);
                }
            }),
            errorMessage: 'Provider with that id does not exist!'
        }
    }, launchableUrl: {
        exists: {
            errorMessage: 'Has to exist!'
        },
        isString: {
            errorMessage: "Has to be string",
            bail: true
        }
    }, username: {
        optional: true,
        isString: {
            errorMessage: "Has to be string"
        }
    }, password: {
        optional: true,
        isString: {
            errorMessage: "Has to be string"
        }
    }, type: {
        optional: true,
        isString: {
            errorMessage: "Has to be string",
            bail: true
        },
        custom: {
            options: (value) => {
                if (!['LTI13', 'LTI11', 'CMI5', 'METADATA'].includes(value))
                    return false;
                return true;
            },
            errorMessage: "Invalid Value only allowed: ['LTI13', 'LTI11', 'CMI5', 'METADATA']"
        }
    }, displayName: {
        exists: {
            errorMessage: 'Has to exist!'
        },
        isString: {
            errorMessage: "Has to be string",
            bail: true
        },
    }, customProperties: {
        optional: true
    }, availabilityHistory: {
        optional: true
    }, activityId: {
        optional: true
    }, oidc_login_url: {
        optional: true
    }, target: {
        optional: true
    }, client_id: {
        optional: true
    }, storageAccess: {
        optional: true,
        isBoolean: {
            errorMessage: 'Has to be a boolean value'
        }
    }, key_set_url: {
        optional: true,
    } });
const updateToolSChema = {
    // serviceProviderId: {
    //     in: ['body'],
    //     exists: true,
    //     isString: {
    //         errorMessage: "Has to be string",
    //         bail: true
    //     },
    //     custom: {
    //         options: async (value) => {
    //             try {
    //                 await CouchSPBDTO.findById(value)
    //                 return Promise.resolve(true)
    //             } catch (err) {
    //                 return Promise.reject(err)
    //             }
    //         },
    //         errorMessage: 'Provider with that id does not exist!'
    //     }
    // },
    launchableUrl: {
        optional: true,
        isString: {
            errorMessage: "Has to be string",
            bail: true
        }
    },
    username: {
        optional: true,
        isString: {
            errorMessage: "Has to be string"
        }
    },
    password: {
        optional: true,
        isString: {
            errorMessage: "Has to be string"
        }
    },
    type: {
        optional: true,
        isString: {
            errorMessage: "Has to be string",
            bail: true
        },
        custom: {
            options: (value) => {
                if (!['LTI13', 'LTI11', 'CMI5', 'METADATA'].includes(value))
                    return false;
                return true;
            },
            errorMessage: "Invalid Value only allowed: ['LTI13', 'LTI11', 'CMI5', 'METADATA']"
        }
    },
    displayName: {
        exists: true,
        isString: {
            errorMessage: "Has to be string",
            bail: true
        }
    },
    customProperties: {
        optional: true
    },
    availabilityHistory: {
        optional: true
    },
    activityId: {
        optional: true
    },
    oidc_login_url: {
        optional: true
    },
    target: {
        optional: true
    },
    storageAccess: {
        optional: true,
        isBoolean: {
            errorMessage: 'Has to be a boolean value'
        }
    },
    key_set_url: {
        optional: true,
    },
    target_link_uri: {
        optional: true,
    },
    authType: {
        optional: true
    }
};
exports.createToolValidation = (0, express_validator_1.checkSchema)(createToolSchema);
exports.updateToolValidation = (0, express_validator_1.checkSchema)(updateToolSChema);
