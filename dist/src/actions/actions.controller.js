"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsController = void 0;
const common_1 = require("@nestjs/common");
const actions_service_1 = require("./actions.service");
const create_action_dto_1 = require("./dto/create-action.dto");
const update_action_dto_1 = require("./dto/update-action.dto");
let ActionsController = class ActionsController {
    constructor(actionsService) {
        this.actionsService = actionsService;
    }
    create(createActionDto) {
        return this.actionsService.create(createActionDto);
    }
    findAll() {
        return this.actionsService.findAll();
    }
    findOne(id) {
        return this.actionsService.findOne(+id);
    }
    update(id, updateActionDto) {
        return this.actionsService.update(+id, updateActionDto);
    }
    remove(id) {
        return this.actionsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_action_dto_1.CreateActionDto]),
    __metadata("design:returntype", void 0)
], ActionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_action_dto_1.UpdateActionDto]),
    __metadata("design:returntype", void 0)
], ActionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActionsController.prototype, "remove", null);
ActionsController = __decorate([
    (0, common_1.Controller)('actions'),
    __metadata("design:paramtypes", [actions_service_1.ActionsService])
], ActionsController);
exports.ActionsController = ActionsController;
//# sourceMappingURL=actions.controller.js.map