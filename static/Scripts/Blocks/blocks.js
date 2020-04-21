'use strict';

function loadBlocks(blocks){
    if(Code.LANG == "es"){
        loadSpanish("españolo")
    }
    if(Code.LANG == "en"){
        loadEnglish("ingleso")
    }
    LearnBlock.defineBlocksWithJsonArray(JSON.parse(blocks));
}

//Procedures functions
LearnBlock.Blocks.procedures = {};
LearnBlock.Blocks.procedures_defnoreturn = {
    init: function () {
        var a = new LearnBlock.FieldTextInput("", LearnBlock.Procedures.rename);
        this.appendDummyInput().appendField("Function").appendField(a, "NAME").appendField("", "PARAMS");
        this.setStyle("procedure_blocks");
        this.setStatements_(!0);
        this.statementConnection_ = null;
    },
    setStatements_: function (a) {
        this.hasStatements_ !== a && (a ? (this.appendStatementInput("STACK").appendField(LearnBlock.Msg.PROCEDURES_DEFNORETURN_DO), this.getInput("RETURN") && this.moveInputBefore("STACK", "RETURN")) : this.removeInput("STACK", !0), this.hasStatements_ = a)
    },
    getProcedureDef: function () {
        return [this.getFieldValue("NAME"), !1]
    },
    calltype_: "procedures_callnoreturn"
};
LearnBlock.Blocks.procedures_callnoreturn = {
    init: function () {
        this.appendDummyInput("TOPROW").appendField(this.id, "NAME");
        this.setPreviousStatement(!0);
        this.setNextStatement(!0);
        this.setStyle("procedure_blocks");
    },
    getProcedureCall: function () {
        return this.getFieldValue("NAME")
    },
    renameProcedure: function (a, b) {
        LearnBlock.Names.equals(a, this.getProcedureCall()) && (this.setFieldValue(b, "NAME"))
    },
    mutationToDom: function () {
        var a = LearnBlock.utils.xml.createElement("mutation");
        a.setAttribute("name", this.getProcedureCall());
        return a
    },
    domToMutation: function (a) {
        var b = a.getAttribute("name");
        this.renameProcedure(this.getProcedureCall(), b);
    },
    onchange: function (a) {
        if (this.workspace &&
            !this.workspace.isFlyout && a.recordUndo)
            if (a.type == LearnBlock.Events.BLOCK_CREATE && -1 != a.ids.indexOf(this.id)) {
                var b = this.getProcedureCall();
                b = LearnBlock.Procedures.getDefinition(b, this.workspace);
                !b || b.type == this.deftype_ && JSON.stringify(b.arguments_) == JSON.stringify(this.arguments_) || (b = null);
                if (!b) {
                    LearnBlock.Events.setGroup(a.group);
                    a = LearnBlock.utils.xml.createElement("xml");
                    b = LearnBlock.utils.xml.createElement("block");
                    b.setAttribute("type", this.deftype_);
                    var c = this.getRelativeToSurfaceXY(),
                        d = c.y + 2 * LearnBlock.SNAP_RADIUS;
                    b.setAttribute("x", c.x + LearnBlock.SNAP_RADIUS * (this.RTL ? -1 : 1));
                    b.setAttribute("y", d);
                    c = this.mutationToDom();
                    b.appendChild(c);
                    c = LearnBlock.utils.xml.createElement("field");
                    c.setAttribute("name", "NAME");
                    c.appendChild(LearnBlock.utils.xml.createTextNode(this.getProcedureCall()));
                    b.appendChild(c);
                    a.appendChild(b);
                    LearnBlock.Xml.domToWorkspace(a, this.workspace);
                    LearnBlock.Events.setGroup(!1)
                }
            } else a.type == LearnBlock.Events.BLOCK_DELETE ? (b = this.getProcedureCall(), b = LearnBlock.Procedures.getDefinition(b, this.workspace), b || (LearnBlock.Events.setGroup(a.group),
                this.dispose(!0, !1), LearnBlock.Events.setGroup(!1))) : a.type == LearnBlock.Events.CHANGE && "disabled" == a.element && (b = this.getProcedureCall(), (b = LearnBlock.Procedures.getDefinition(b, this.workspace)) && b.id == a.blockId && ((b = LearnBlock.Events.getGroup()) && console.log("Saw an existing group while responding to a definition change"), LearnBlock.Events.setGroup(a.group), a.newValue ? (this.previousEnabledState_ = this.isEnabled(), this.setEnabled(!1)) : this.setEnabled(this.previousEnabledState_), LearnBlock.Events.setGroup(b)))
    },
    deftype_: "procedures_defnoreturn"
};
