
use XML::Writer;
use IO::File;

my $OUTPUT = new IO::File "> data.xml";


my $writer = XML::Writer->new( OUTPUT => $OUTPUT, DATA_MODE => 1);

$writer->startTag("record");
$writer->dataElement("age", "7");
$writer->dataElement("chapter",10);
$writer->cdataElement("html","<b><i>this is bold italic</i></b>");
$writer->endTag("record");

$writer->startTag("record");
$writer->dataElement("age", "7");
$writer->dataElement("chapter",10);
$writer->cdataElement("html","<b><i>this is bold italic</i></b>");
$writer->endTag("record");




