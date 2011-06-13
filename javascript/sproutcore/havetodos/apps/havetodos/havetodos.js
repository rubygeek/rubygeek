// ==========================================================================
// Project:   Havetodos
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Havetodos */

Havetodos = SC.Application.create();

SC.ready(function() {
  Havetodos.mainPane = SC.TemplatePane.append({
    layerId: 'havetodos',
    templateName: 'havetodos'
  });
});
