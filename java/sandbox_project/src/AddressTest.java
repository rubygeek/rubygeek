import junit.framework.TestCase;

public class AddressTest extends TestCase {
	
	public void testBuilderDefaults() {
		Address expected = new Address.Builder().build();
		assertEquals("State is ZZ", "ZZ", expected.getState());
		assertEquals("Zip is 99999", "99999", expected.getZip());
	}
	
	public void testBuilderStreetStateZip() {
		Address expected = new Address.Builder().street("this is an address").state("YY").zip("11111").build();
		assertEquals("Address is this is an address", "this is an address", expected.getStreet());
		assertEquals("Zip is 11111", "11111", expected.getZip());
		assertEquals("State is YY", "YY", expected.getState());		
	}

	// Try a different order
	public void testBuilderZipStreetState() {
		Address expected = new Address.Builder().zip("11111").street("this is an address").state("YY").build();
		assertEquals("Address is this is an address", "this is an address", expected.getStreet());
		assertEquals("Zip is 11111", "11111", expected.getZip());
		assertEquals("State is YY", "YY", expected.getState());		
	}

}
