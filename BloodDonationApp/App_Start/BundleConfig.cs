using System.Web;
using System.Web.Optimization;

namespace BloodDonationApp
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular.js",
                "~/Scripts/angular-*"));



            bundles.Add(new ScriptBundle("~/bundles/angular-ui").Include(
                       "~/Scripts/ui-bootstrap-tpls.js",
                         "~/Scripts/ui-bootstrap.js"
                         ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/ui-bootstrap-csp.css",
                      "~/Content/angular-csp.css",
                      "~/Content/site.css"));
        }
    }
}
